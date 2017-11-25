import { h, Component } from "preact";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class Loginform extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder="Ditt mobilnummer"
            name="phoneNumber"
            component="input"
            type="number"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "login"
})(connect(null, null)(Loginform));
