import { useEffect, useState } from 'react';
import ReactFlowComponent from './ReactFlowComponent';
import { ReactFlowProvider } from 'react-flow-renderer';

// import components
import SideBar from './SideBar';
import Header from './Header';
import Result from './Result';

import '../styles/global.scss';

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
