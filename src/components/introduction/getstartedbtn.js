import { h, Component } from "preact";
import { connect } from "react-redux";
import { redirectToNordea } from "../../routes/nordea-auth/actions";

class GetStartedBtn extends Component {
  render() {
    return (
      <button
        className="getStartedBtn"
        onClick={() => this.props.redirectToNordea()}
      >
        Click here to get started!
      </button>
    );
  }
}

export default connect(null, { redirectToNordea })(GetStartedBtn);
