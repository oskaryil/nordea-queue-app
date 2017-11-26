import { h, Component } from "preact";
import { connect } from "react-redux";
import { verify } from "./action";
import Verifyform from "./verifyform";

class Verify extends Component {
  submit(values) {
    this.props.verify(values);
  }
  render() {
    return (
      <div>
        <Verifyform onSubmit={this.submit.bind(this)} />
      </div>
    );
  }
}

export default connect(null, { verify })(Verify);
