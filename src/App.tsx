import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './Home/HomePage';
import { useScript } from './hooks/useScript';

export default function App() {
  useScript('assets/js/vendor.js');
  useScript('assets/js/main.js');
  return (
    <Router>
      <Switch>
        <Redirect from='/' to={'/home'} exact={true} />
        <Route exact path='/home' component={HomePage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
}
