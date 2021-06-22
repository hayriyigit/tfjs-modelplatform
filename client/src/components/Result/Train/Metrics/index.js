import { useState } from 'react';
import AccuracyGraph from './AccuracyGraph';
import LossGraph from './LossGraph';
import { Switch } from 'antd';

const index = () => {
  const [metric, setMetric] = useState('acc');
  const onChange = (e) => {
    e ? setMetric('loss') : setMetric('acc');
  };
  return (
    <>
      <div className="head">
        <p>RESULT</p>
        <div className="mode-switch">
          <p>Accuracy</p>
          <Switch onChange={onChange} size="small" />
          <p>Loss</p>
        </div>
      </div>
      {metric === 'acc' && <AccuracyGraph />}
      {metric === 'loss' && <LossGraph />}
      <style jsx>{`
        .mode-switch {
          display: flex;
          flex-direction: row;
        }

        .head {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 30px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .head p {
          margin: 0 10px;
        }
        .head button {
          align-self: center;
        }
      `}</style>
    </>
  );
};

export default index;
