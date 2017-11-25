import {Router} from 'preact-router'
import { Match } from 'preact-router/match';
import Intro from './components/introduction';
import Home from './routes/home';
import Profile from './routes/profile';
import Nordea from './routes/nordea-auth';
import NordeaFallback from './routes/nordea-redirect';

export default props =>
  <Router>
    <Intro path="/" />
    <Profile path="/profile" />
		<Nordea path="/nordea" />
    <NordeaFallback path="/nordeacallback" />
  </Router>
