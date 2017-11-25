import { h, Component } from "preact";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class SignupForm extends Component {
  submit(values) {
    console.log("submit called", values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder="Telefon"
            name="phoneNumber"
            component="input"
            type="number"
          />
        </div>
        <button type="submit">Registera dig</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "signup"
})(connect(null, null)(SignupForm));
