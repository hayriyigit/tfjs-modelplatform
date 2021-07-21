const tf = require('@tensorflow/tfjs-node');

const compile_model = async (model, data) => {
  await model.compile({
    optimizer: tf.train[data.optimizer]((learningRate = data.learningRate)),
    loss: data.loss,
    metrics: ['accuracy'],
  });
};

const get_layers = async(model) => {
  const layers = {}
  await model.layers
          .filter((i) => Object.keys(i).includes('kernel'))
          .map((i) =>
            Object.assign(layers, { [i.name]: { index: i.id } })
          );
  return layers
}

module.exports = { compile_model, get_layers };
