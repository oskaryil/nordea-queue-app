import { h, Component } from "preact";
import { connect } from "react-redux";
import { redirectToNordea } from "../../routes/nordea-auth/actions";

class GetStartedBtn extends Component {
  render() {
    return (
      <button
        className="basic-button centered"
        onClick={this.props.redirectToNordea.bind(this)}
      >
        Click here to get started!
      </button>
    );
  }
}

export default connect(null, { redirectToNordea })(GetStartedBtn);
