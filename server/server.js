require('@tensorflow/tfjs-node');
const cluster = require('cluster');
const socket = require('socket.io');
const numCPUs = require('os').cpus().length;
const staticServe = require('./utils/serve-static');

const { modelMapper } = require('./utils/model-mapper');
const { compile_model, get_layers } = require('./utils/compileModel');
const { fit_model } = require('./utils/fitModel');

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const httpServer = require('http').createServer(staticServe);
  const io = socket(httpServer, {
    transports: ['websocket'],
    cors: {
      origins: '*:*',
    },
  });

  io.on('connection', (socket) => {
    socket.on('compile', async (req) => {
      const data = req.data;
      socket.session = {
        model: null,
        layers: {},
        metrics: null,
        outputs: null,
      };

      try {
        const model = await modelMapper(data);
        socket.session.model = model;
        await get_layers(model).then((data) => (socket.session.layers = data));
      } catch (e) {
        socket.emit('compile_status', {
          status: false,
          message: 'Error when creating model!',
        });
      }

      try {
        await compile_model(socket.session.model, data.compile_options);
        socket.emit('compile_status', {
          status: true,
          message: 'Model compiled successfully!',
        });
      } catch (e) {
        socket.emit('compile_status', {
          status: false,
          message: 'Error when compiling model!',
        });
      }
    });

    socket.on('train', async (data) => {
      await fit_model(socket, data);
    });

    socket.on('disconnect', (data) => {
      console.log('disconnected');
    });
  });

  httpServer.listen(8001);
}
