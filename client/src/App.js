import ReactFlowComponent from './components/ReactFlowComponent';

// import components
import SideBar from './components/SideBar';

import './styles/global.scss';

export default function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="content">
        <div className="flow">
          <ReactFlowComponent />
        </div>
        <div className="result"></div>
      </div>
    </div>
  );
}
