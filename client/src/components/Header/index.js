import CompileModel from './CompileModel';
import TrainModel from './TrainModel';

export default function index() {
  return (
    <div className="header">
      <CompileModel />
      <TrainModel />

      <style jsx>
        {`
          .header {
            display: flex;
            height: 25px;
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
        `}
      </style>
    </div>
  );
}
