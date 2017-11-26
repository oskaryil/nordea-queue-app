import { h, Component } from "preact";
import '../../assets/styles/styles.css'


export default class Bullet extends Component {
  handleClick = () => this.props.onClick(this.props.index)
  
  render() {
    return <button
      type='button'
      className={
        this.props.isActive ? 'active' : 'album'
      }
      onClick={ this.handleClick }
    >
      <span>{ this.props.name }</span>
    </button>
  }
}
