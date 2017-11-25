import { h, Component } from "preact";
import { connect } from "react-redux";
import { signup } from "./action";
import SignupForm from "./signupform";

class Signup extends Component {
  submit(values) {
    this.props.signup(values);
  }
  render() {
    return (
      <div>
        <h6>Registrera dig med ditt telefonnummer nedan</h6>
        <SignupForm onSubmit={this.submit.bind(this)} />
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);
