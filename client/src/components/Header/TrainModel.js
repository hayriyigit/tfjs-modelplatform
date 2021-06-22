import { useState } from 'react';
import { TrainOptions } from '../Modal';

const TrainModel = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const showModal = () => setModalStatus(true);

  return (
    <>
      <button onClick={showModal}>TRAIN MODEL</button>
      <TrainOptions visible={modalStatus} setVisibility={setModalStatus} />
    </>
  );
};

export default TrainModel;
