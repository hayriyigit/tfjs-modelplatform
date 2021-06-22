import { createContext, useContext, useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [compileStatus, setCompileStatus] = useState(null);
  const [trainStatus, setTrainStatus] = useState(null);

  const [metrics, setMetrics] = useState({
    acc: [],
    val_acc: [],
    loss: [],
    val_loss: [],
  });
  const compile_model = (nodes, edges, compile_options) =>
    socket.emit('compile', { nodes, edges, compile_options });

  const start_train = (trainOptions) => socket.emit('train', trainOptions);

  useEffect(() => {
    if (socket) {
      socket.on('on_epoch_end', (data) => {
        setMetrics((prev) => ({
          acc: [...prev.acc, parseFloat(data.metrics.acc)],
          val_acc: [...prev.val_acc, parseFloat(data.metrics.val_acc)],
          loss: [...prev.loss, parseFloat(data.metrics.loss)],
          val_loss: [...prev.val_loss, parseFloat(data.metrics.val_loss)],
        }));
      });
    }
  }, [socket]);

  useEffect(() => {
    const socketIo = io('http://localhost:8001', {
      transports: ['websocket', 'polling'],
      cors: {
        origins: '*:*',
      },
    });

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
      socketIo.close();
    }
    return cleanup;
  }, []);

  const value = {
    socket,
    compile_model,
    start_train,
    compileStatus,
    setCompileStatus,
    trainStatus,
    setTrainStatus,
    metrics,
  };
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}
