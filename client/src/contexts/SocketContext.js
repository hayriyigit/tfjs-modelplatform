import { createContext, useContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const [compileStatus, setCompileStatus] = useState(null);
  const [trainStatus, setTrainStatus] = useState(null);

  const compile_model = (nodes, edges, compile_options) =>
    socket.emit('compile', { nodes, edges, compile_options });

  const start_train = (trainOptions) =>
    // ToDo: start train

  useEffect(() => {
    if (socket) {
      socket.on('compile_status', (data) => {
        const status = data['status'] === 'success';
        setCompileStatus({ status, message: data.message });
      });
    }
  }, [socket]);

  useEffect(() => {
    console.log('Compile Status Changed in Context!');
  }, [compileStatus]);

  useEffect(() => {
    const socketIo = io('http://127.0.0.1:8000');

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
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
  };
  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}
