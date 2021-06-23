import { Route } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function index({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          window.location.assign('http://localhost:8081/login')
        );
      }}
    ></Route>
  );
}
