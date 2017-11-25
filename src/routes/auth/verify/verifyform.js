import { h, Component } from "preact";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class Verifyform extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder="Verifierings kod"
            name="verificationCode"
            component="input"
            type="string"
          />
        </div>
        <button type="submit">Verify</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "verify"
})(connect(null, null)(Verifyform));