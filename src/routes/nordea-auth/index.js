import { h, Component } from 'preact';
import { connect } from 'react-redux';

import { redirectToNordea } from './actions';

class Nordea extends Component {
	render() {
		return (
			<div>
				{this.props.redirectToNordea()}
			</div>
		);
	}
}

export default connect(null, { redirectToNordea })(Nordea);
