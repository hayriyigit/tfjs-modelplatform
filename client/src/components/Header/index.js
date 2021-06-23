import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'antd';
import CompileModel from './CompileModel';
import TrainModel from './TrainModel';
import { useSocket } from '../../contexts/SocketContext';

export default function index() {
  const { socket } = useSocket();
  const [visibility, setVisibility] = useState(false);
  const history = useHistory();
  const handleOk = () => {
    history.push('/');
    setVisibility(false);
  };
  const handleCancel = () => {
    window.close()
  };
  useEffect(() => {
    if (socket) {
      socket.on('homework_status', async (data) => {
        if (data.status) {
          setVisibility(true);
        }
      });
    }
  }, [socket]);

  return (
    <div className="header">
      <Modal
        title="Task passed!"
        visible={visibility}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="task_message">Do you want to continue?</p>
      </Modal>
      <CompileModel />
      <TrainModel />

      <style jsx>
        {`
          .header {
            display: flex;
            height: 4%;
            padding: 1px 10px;
            gap: 15px;
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          .header button {
            color: #fff;
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
          .task_message {
            color: #fff;
            font-size: 18px;
          }
        `}
      </style>
    </div>
  );
}
