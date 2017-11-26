import { h, Component } from "preact";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class SignupForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label className="field">
            Register with your phonenumber below
          <Field
            placeholder="Telefon"
            name="phoneNumber"
            component="input"
            type="number"
          />
        </label>
          <button className="basic-button centered" type="submit">
              Register
          </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "signup"
})(connect(null, null)(SignupForm));
