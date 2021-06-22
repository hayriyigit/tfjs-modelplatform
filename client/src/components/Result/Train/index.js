import { useState } from 'react';

import { useSocket } from '../../../contexts/SocketContext';
import Metrics from './Metrics';
import LayerInfo from './LayerInfo';

export default function Train() {
  const [mode, setMode] = useState('metrics');
  const { layers } = useSocket();

  const handleLayerChange = (e) => {
    setMode(e.target.innerHTML);
  };

  return (
    <div className="train_main">
      <div className="graph">
        {mode === 'metrics' && <Metrics />}
        {mode.match(/\/*.*_[a-zA-Z0-9]+/) && (
          <LayerInfo layer={mode} switchMetrics={setMode} />
        )}
      </div>
      <div className="layers">
        <div className="head">
          <p>LAYERS</p>
        </div>
        <div className="layer_list">
          {Object.keys(layers).map((layerName) => (
            <p onClick={handleLayerChange}>{layerName}</p>
          ))}
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
        .layer_list {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: auto;
        }
        .layer_list p {
          font-size: 18px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
