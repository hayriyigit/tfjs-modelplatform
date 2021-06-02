import { useState } from 'react';
import { TrainOptions } from '../Modal';

const TrainModel = () => {
  console.log('Train rendered!');
  const [modalStatus, setModalStatus] = useState(false);

  const showModal = () => setModalStatus(true);

  return (
    <>
      <button className="" onClick={showModal}>
        TRAIN MODEL
      </button>
      <TrainOptions visible={modalStatus} setVisibility={setModalStatus} />
    </>
  );
};

export default TrainModel;
