import { useState } from 'react';
import { Switch } from 'antd';
import HeatMap from './HeatMap';
import BarChart from './BarChart';

const index = ({ layer, switchMetrics }) => {
  const [mode, setMode] = useState('weight');
  const onChange = (e) => {
    e ? setMode('bias') : setMode('weight');
  };
  return (
    <>
      <div className="head">
        <p>RESULT</p>
        <p
          style={{ cursor: 'pointer' }}
          onClick={() => switchMetrics('metrics')}
        >
          Switch to metrics
        </p>
        <div className="mode-switch">
          <p>Weight</p>
          <Switch onChange={onChange} size="small" />
          <p>Bias</p>
        </div>
      </div>
      {layer.includes('conv') && mode === 'weight' && <HeatMap layer={layer} />}
      {layer.includes('dense') && mode === 'weight' && <BarChart layer={layer} mode={mode} />}
      {mode === 'bias' && <BarChart layer={layer} mode={mode} />}
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
