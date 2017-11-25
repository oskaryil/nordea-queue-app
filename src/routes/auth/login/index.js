import { h, Component } from "preact";
import { connect } from "react-redux";
import { login } from "./action";
import Loginform from "./loginform";

class Login extends Component {
  submit(values) {
    this.props.login(values);
  }
  render() {
    return (
      <div>
        <h6>Login</h6>
        <Loginform onSubmit={this.submit.bind(this)} />
      </div>
    );
  }
}

export default connect(null, { login })(Login);
