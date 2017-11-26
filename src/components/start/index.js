import { Component } from "preact";
import { Link } from "preact-router/match";

export default class Start extends Component {
  render() {
    return (
      <div class="start-page">
        <Link href="/login">
          <button class="basic-button">Login</button>
        </Link>
        <Link href="/prep">
          <button class="basic-button">Skip Login</button>
        </Link>
        <Link href="/signup">
          <button class="basic-button">New customer</button>
        </Link>
      </div>
    );
  }
}
