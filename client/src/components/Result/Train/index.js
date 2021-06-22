import { useState, useEffect } from 'react';
import AccuracyGraph from './AccuracyGraph';
import LossGraph from './LossGraph';
import { Switch } from 'antd';

export default function Train() {
  const [metric, setMetric] = useState('acc');
  const onChange = (e) => {
    e ? setMetric('loss') : setMetric('acc');
  };
  return (
    <div className="train_main">
      <div className="graph">
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
      </div>
      <div className="layers">
        <div className="head">
          <p>LAYERS</p>
        </div>
      </div>
      <style jsx>{`
        .train_main {
          display: flex;
          flex-direction: row;
          height: 100%;
          width: 100%;
        }
        .mode-switch {
          display: flex;
          flex-direction: row;
        }
        .graph {
          width: 70%;
        }
        .layers {
          width: 30%;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
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
    </div>
  );
}
