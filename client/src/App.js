import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/CustomRoutes/PrivateRoute';

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
