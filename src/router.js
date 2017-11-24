import {Router} from 'preact-router'
import { Match } from 'preact-router/match';
import Intro from './components/introduction';
import Home from './routes/home';
import Profile from './routes/profile';

export default props =>
  <Router>
    <Intro path="/" />
    <Profile path="/profile" />
  </Router>
