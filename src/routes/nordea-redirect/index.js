import { h, Component } from 'preact'
import {connect} from 'react-redux'

import { sendCode } from './action'

class NordeaFallback extends Component {
  render() {
    const code = this.props.code
    console.log(this.props)
    return  (
      <div>
        <p>dsada</p>
      {this.props.sendCode()}
      </div>
    )
  }
}

export default (null, {sendCode})(NordeaFallback)
