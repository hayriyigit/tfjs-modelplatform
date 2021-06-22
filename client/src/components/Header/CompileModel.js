import { useState } from 'react';
import { CompileOptions } from '../Modal';

const CompileModel = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const showModal = () => setModalStatus(true);

  return (
    <>
      <button onClick={showModal}>COMPILE MODEL</button>
      <CompileOptions visible={modalStatus} setVisibility={setModalStatus} />
    </>
  );
};

export default CompileModel;
