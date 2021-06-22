import ReactFlowComponent from './components/ReactFlowComponent';
import { ReactFlowProvider } from 'react-flow-renderer';

// import components
import SideBar from './components/SideBar';
import Header from './components/Header';
import Result from './components/Result';

import './styles/global.scss';

export default function App() {
  return (
    <div className="container">
      <ReactFlowProvider>
        <SideBar />
        <div className="content">
          <Header />
          <div className="flow">
            <ReactFlowComponent />
          </div>
          <Result />
        </div>
      </ReactFlowProvider>
    </div>
  );
}
