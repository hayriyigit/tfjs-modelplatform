import { useState, useEffect } from 'react';
import { Modal, message } from 'antd';
import { useSocket } from '../../../contexts/SocketContext';
import { useStoreState } from 'react-flow-renderer';
import { useLocation } from 'react-router-dom';
import CompileOptionsForm from './CompileOptionsForm';

const CompileOptions = ({ visible, setVisibility }) => {
  const location = useLocation();
  const { compile_model, setCompileStatus, socket } = useSocket();
  const elements = useStoreState((store) => store.nodes);
  const edges = useStoreState((store) => store.edges);
  const [compileOptions, setCompileOptions] = useState({
    optimizer: 'adadelta',
    learningRate: 0,
    loss: 'binaryCrossentropy',
  });

  const onChange = (name, e) => {
    setCompileOptions((ops) => {
      ops[name] = e;
      return ops;
    });
  };

  const compileModel = async () => {
    await compile_model(elements, edges, compileOptions, location.pathname);
  };

  useEffect(() => {
    if (socket) {
      socket.on('compile_status', async (data) => {
        if (data.status) {
          await setCompileStatus(true);
          message.success(data.message);
        } else {
          await setCompileStatus(false);
          message.error(data.message);
        }
      });
      socket.on('homework_status', async (data) => {
        if (data.status) {
          setVisibility(false);
          message.success('Task passed!');
        } else {
          message.error('Task failed! Check the model.');
        }
      });
    }
  }, [socket]);

  return (
    <Modal
      title="Compile Options"
      visible={visible}
      onOk={compileModel}
      onCancel={() => setVisibility(false)}
      cancelText="Cancel"
      okText="Compile"
      width={500}
      height={200}
      draggable
    >
      <CompileOptionsForm onChange={onChange} values={compileOptions} />
    </Modal>
  );
};

export default CompileOptions;
