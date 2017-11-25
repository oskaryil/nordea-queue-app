import {Router} from 'preact-router'
import { Match } from 'preact-router/match';
import Intro from './components/introduction';
import Home from './routes/home';
import Profile from './routes/profile';
import Nordea from './routes/nordea-auth';
import Main from './routes/main';
import ChatbotPrep from './routes/chatbot-prep';
import NordeaFallback from './routes/nordea-redirect';
import Auth from './routes/auth'

export default props =>
  <Router>
    <Home path="/" />    
    <Intro path="/intro" />
    <Profile path="/profile" />
		<Nordea path="/nordea" />
      <Main path="/main" />
      <ChatbotPrep path="/prep" />
    <NordeaFallback path="/nordeacallback" />
    <Auth path="/auth" />
  </Router>
