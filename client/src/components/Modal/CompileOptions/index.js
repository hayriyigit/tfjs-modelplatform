import { memo, useState, useEffect } from 'react';
import { Modal, message } from 'antd';
import { useSocket } from '../../../contexts/SocketContext';
import { useStoreState } from 'react-flow-renderer';

import CompileOptionsForm from './CompileOptionsForm';

const CompileOptions = ({ visible, setVisibility }) => {
  const { compile_model, compileStatus } = useSocket();
  const elements = useStoreState((store) => store.nodes);
  const edges = useStoreState((store) => store.edges);
  const [compileOptions, setCompileOptions] = useState({
    optimizer: 'adadelta',
    learning_rate: 0,
    loss: 'binary_crossentropy',
  });

  const onChange = (name, e) => {
    setCompileOptions((ops) => {
      ops[name] = e;
      return ops;
    });
  };

  const compileModel = () => {
    compile_model(elements, edges, compileOptions);
  };

  useEffect(() => {
    if (compileStatus) {
      compileStatus.status
        ? message.success('Model compiled successfully!')
        : message.error('Error when compiling model!');
    }
  }, [compileStatus]);

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
      <CompileOptionsForm onChange={onChange} />
    </Modal>
  );
};

export default CompileOptions;
