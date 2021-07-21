const tf = require('@tensorflow/tfjs-node');
const math = require('mathjs');
const getKernel = require('./getKernel');
const { MnistData } = require('./getData');

const onTrainBegin = (logs) => {
  global.socket.emit('train_status', {
    status: true,
    message: 'Train started.\nWaiting for the first data...',
  });
};

const onEpochEnd = async (epoch, logs) => {
  const result = {
    val_loss: logs.val_loss.toFixed(3),
    loss: logs.loss.toFixed(3),
    val_acc: logs.val_acc.toFixed(3),
    acc: logs.acc.toFixed(3),
  };

  global.socket.session.model.layers.map(async (layer) => {
    if (global.socket.session.layers[layer.name]) {
      const filtershape = math.size(layer.getWeights()[0].arraySync());
      const datasync = layer.getWeights()[0].dataSync();

      const weights = layer.name.includes('dense')
        ? datasync
        : await getKernel(datasync, filtershape);

      const biases = layer.getWeights()[1].arraySync();

      global.socket.session.layers[layer.name].shape = filtershape;
      global.socket.session.layers[layer.name].weights = Object.values(weights);
      global.socket.session.layers[layer.name].biases = biases;
    }
  });
  global.socket.emit('on_epoch_end', {
    epoch,
    metrics: result,
    layers: global.socket.session.layers,
  });
};

const get_data = async () => {
  global.socket.emit('train_status', {
    status: false,
    message: 'Downloading dataset...',
  });
  const mnistData = new MnistData();
  if (!global.socket.trainData) {
    global.socket.trainData = await mnistData.load();
  }
  global.socket.emit('train_status', {
    status: false,
    message: 'Dataset downloaded...',
  });
};

const fit_model = async (socket, data) => {
  global.socket = socket;
  await get_data();

  const callback = data.callback
    ? [
        tf.callbacks.earlyStopping({
          monitor: data.monitor,
          patience: data.patience,
        }),
      ]
    : [];

  global.socket.session.model.fit(
    global.socket.trainData.normalizedTrain,
    global.socket.trainData.trainLabels,
    {
      batchSize: data.batchSize,
      epochs: data.epochs,
      shuffle: data.shuffle,
      verbose: 1,
      validationSplit: 0.2,
      callbacks: [
        new tf.CustomCallback({
          onEpochEnd: onEpochEnd,
          onTrainBegin: onTrainBegin,
        }),
        ...callback,
      ],
    }
  );
};

module.exports = { fit_model };
