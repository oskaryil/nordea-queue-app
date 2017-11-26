import { h, Component } from "preact";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

class Loginform extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Login
            <Field
              placeholder="Ditt mobilnummer"
              name="phoneNumber"
              component="input"
              type="number"
            />
          </label>
          <button className="basic-button centered" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "login"
})(connect(null, null)(Loginform));
