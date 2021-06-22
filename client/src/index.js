import { render } from 'react-dom';
import App from './App';
import { SocketProvider } from './contexts/SocketContext';
import { AuthProvider } from './contexts/AuthContext';

import 'antd/dist/antd.min.css';

render(
  <SocketProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </SocketProvider>,
  document.getElementById('root')
);
