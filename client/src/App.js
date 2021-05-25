import ReactFlowComponent from './components/ReactFlowComponent';
import './styles/global.scss';

export default function App() {
  return (
    <div className="container">
      <div className="sidebar"></div>
      <div className="content">
        <div className="flow">
          <ReactFlowComponent />
        </div>
        <div className="result"></div>
      </div>
    </div>
  );
}
