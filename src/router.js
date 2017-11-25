import { Router } from "preact-router";
import { Match } from "preact-router/match";
import Intro from "./components/introduction";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Nordea from "./routes/nordea-auth";
import NordeaFallback from "./routes/nordea-redirect";
import Signup from "./routes/auth/signup";
import Login from "./routes/auth/login";
import Main from "./routes/main";
import Verify from "./routes/auth/verify";
import ChatbotPrep from "./routes/chatbot-prep";
import Auth from "./routes/auth";

export default props => (
  <Router>
    <Home path="/" />
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
);
