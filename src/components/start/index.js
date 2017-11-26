import { Component } from "preact";
import Options from "./options";
import { Link } from "preact-router/match";

export default class Start extends Component {
  render() {
    return (
      <div class="start-page">
        <h1 className="intro-title">Nordea Queue</h1>
        <Options />
        <Link href="/prep">
          <p className="small-texts">Skip Login</p>
        </Link>
      </div>
    );
  }
}
