import { Router } from "preact-router";
import { Match } from "preact-router/match";
import Intro from "./components/introduction";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Nordea from "./routes/nordea-auth";
import NordeaFallback from "./routes/nordea-redirect";
import Main from "./routes/main";
import ChatbotPrep from "./routes/chatbot-prep";
import Login from "./routes/auth/login";
import Signup from "./routes/auth/signup";
import Verify from "./routes/auth/verify";
import Start from './components/start';

export default props => 
  <Router>
    <Home path="/" />
    <Start path="/start" />
    <Intro path="/intro" />
    <Profile path="/profile" />
    <Nordea path="/nordea" />
    <Main path="/main" />
    <ChatbotPrep path="/prep" />
    <NordeaFallback path="/nordeacallback" />
    <Signup path="/signup" />
    <Login path="/login" />
    <Verify path="/verify" />
  </Router>

