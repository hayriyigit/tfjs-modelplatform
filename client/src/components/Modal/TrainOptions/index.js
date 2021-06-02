import { memo, useState, useEffect } from 'react';
import { Modal, message } from 'antd';
import { useSocket } from '../../../contexts/SocketContext';

import TrainOptionsForm from './TrainOptionsForm';

const TrainOptions = memo(({ visible, setVisibility }) => {
  const { start_train, compileStatus, trainStatus } = useSocket();
  const [trainOptions, setTrainOptions] = useState({
    batch_size: 1,
    epochs: 1,
    validation_split: 0.2,
    shuffle: false,
    early_stopping: false,
  });

  const onChange = (name, e) => {
    setTrainOptions((ops) => {
      ops[name] = e;
      return ops;
    });
  };

  const trainModel = () => {
    compileStatus && compileStatus.status
      ? start_train(trainOptions)
      : message.error("Model hasn't compiled yet!");
  };

  useEffect(() => {
    if (trainStatus) {
      trainStatus.status
        ? message.success('Model trained successfully!')
        : message.error('Error when training model!');
    }
  }, [trainStatus]);

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
      <TrainOptionsForm onChange={onChange} />
    </Modal>
  );
});

export default TrainOptions;
