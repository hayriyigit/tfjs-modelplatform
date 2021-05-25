import ReactFlowComponent from './components/ReactFlowComponent';
import { ReactFlowProvider } from 'react-flow-renderer';
// import components
import SideBar from './components/SideBar';

import './styles/global.scss';

export default function App() {
  return (
    <div className="container">
      <ReactFlowProvider>
        <SideBar />
        <div className="content">
          <div className="flow">
            <ReactFlowComponent />
          </div>
          <div className="result"></div>
        </div>
      </ReactFlowProvider>
    </div>
  );
}
