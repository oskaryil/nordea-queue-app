import {Router} from 'preact-router'
import { Match } from 'preact-router/match';
import Intro from './components/introduction';
import Home from './routes/home';
import Profile from './routes/profile';
import Nordea from './routes/nordea-auth';
import Main from './routes/main';

export default props =>
  <Router>
    <Intro path="/" />
    <Profile path="/profile" />
		<Nordea path="/nordea" />
      <Main path="/main" />
  </Router>
