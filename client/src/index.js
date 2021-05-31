import { render } from 'react-dom';
import App from './App';
import { SocketProvider } from './contexts/SocketContext';
import 'antd/dist/antd.min.css';

render(
  <SocketProvider>
    <App />
  </SocketProvider>,
  document.getElementById('root')
);
