import { useState, useEffect } from 'react';
import { Modal, message } from 'antd';
import { useSocket } from '../../../contexts/SocketContext';

import TrainOptionsForm from './TrainOptionsForm';

const TrainOptions = ({ visible, setVisibility }) => {
  const { start_train, compileStatus, setTrainStatus, socket } = useSocket();
  const [trainOptions, setTrainOptions] = useState({
    batchSize: 1,
    epochs: 1,
    validationSplit: 0.2,
    shuffle: false,
    earlyStopping: false,
  });

  const onChange = (name, e) => {
    setTrainOptions((ops) => {
      ops[name] = e;
      return ops;
    });
  };

  const trainModel = () => {
    compileStatus
      ? start_train(trainOptions)
      : message.error("Model hasn't compiled yet!");
  };

  useEffect(() => {
    if (socket) {
      socket.on('train_status', (data) => setTrainStatus(data));
    }
  }, [socket]);

  return (
    <Modal
      title="Compile Options"
      visible={visible}
      onOk={trainModel}
      onCancel={() => setVisibility(false)}
      cancelText="Cancel"
      okText="Start Train"
      width={500}
      height={200}
      draggable
    >
      <TrainOptionsForm onChange={onChange} values={trainOptions} />
    </Modal>
  );
};

export default TrainOptions;
