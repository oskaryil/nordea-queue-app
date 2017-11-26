import { h, Component } from 'preact';
import { connect } from 'react-redux'
import style from './style';

class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
}

export default connect(null, null)(Home)