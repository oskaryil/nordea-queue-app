import { h, Component } from 'preact'
import {connect} from 'react-redux'
import { sendCode } from './action'

class NordeaFallback extends Component {
  render() {
    const code = this.props.code
    return  (
      <div>
      {this.props.sendCode()}
      </div>
    )
  }
}

export default connect(null, {sendCode})(NordeaFallback)
