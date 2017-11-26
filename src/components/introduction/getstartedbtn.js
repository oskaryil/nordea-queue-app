import { h, Component } from "preact";
import { connect } from "react-redux";
import { redirectToNordea } from "../../routes/nordea-auth/actions";
import { Link } from "preact-router/match";

class GetStartedBtn extends Component {
  render() {
    return (
      <Link href="/start">
        <button className="basic-button centered">
          Click here to get started!
        </button>
      </Link>
    );
  }
}

export default connect(null, { redirectToNordea })(GetStartedBtn);
