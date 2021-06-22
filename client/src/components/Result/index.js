import { useEffect, useState } from 'react';
import { useSocket } from '../../contexts/SocketContext';
import { Spin } from 'antd';
import Train from './Train';

const Loading = ({ message }) => (
  <>
    <Spin size="large" />
    <p>{message}</p>
  </>
);

export default function index() {
  const { trainStatus } = useSocket();

  return (
    <div className="result">
      {trainStatus && !trainStatus.status && (
        <Loading message={trainStatus.message} />
      )}
      {trainStatus && trainStatus.status && <Train />}
    </div>
  );
}
