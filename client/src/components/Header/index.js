import { useStoreState } from 'react-flow-renderer';
import { useSocket } from '../../contexts/SocketContext';

export default function index() {
  const { create_model } = useSocket();
  const elements = useStoreState((store) => store.nodes);
  const edges = useStoreState((store) => store.edges);
  const onClick = (e) => {
    create_model(elements, edges);
  };
  return (
    <div className="header">
      <button className="" onClick={onClick}>
        CREATE MODEL
      </button>
      <button className="">COMPILE MODEL</button>
      <button className="">TRAIN</button>
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
