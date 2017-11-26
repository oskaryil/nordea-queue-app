import { h, Component } from "preact";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class Verifyform extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
            Verify your number:
          <Field
            placeholder="Verification code..."
            name="verificationCode"
            component="input"
            type="text"
          />
        </label>
          <button className="basic-button centered" type="submit">
              Verify
          </button>
      </form>
    </div>
    );
  }
}

export default reduxForm({
  form: "verify"
})(connect(null, null)(Verifyform));
