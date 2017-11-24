import {Router} from 'preact-router'
import { Match } from 'preact-router/match';
import Header from './components/header';
import Home from './routes/home';
import Profile from './routes/profile';

export default props =>
  <Router>
    <Home path="/" />
    <Profile path="/profile" />
  </Router>
