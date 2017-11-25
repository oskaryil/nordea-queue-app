import { h, Component } from "preact";
import SwipeableViews from "react-swipeable-views";
import introTexts from "../../intro";
import './styles.css'

export default class Intro extends Component {
  state = {
    index: 0
  };

  handleChange = (event, value) => {
    this.setState({
      index: value
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;
    console.log('dada', index)
    const bullets = introTexts.map((_, i)=> {
      return (
        <span 
        onChange={this.handleChange}
        value={index}
        style={{borderRadius: '50%'}}
        className={`slide-${index - i}`}>*</span>
      )
    })

    const texts = introTexts.map(text => {
      return (
        <div className={`intro-slide`}>
          {text.title}
          {text.description}
        </div>
      );
    });

    return (
      <div className={`slides-wrapper`}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {texts}
        </SwipeableViews>
        <div>
          {bullets}
        </div>
      </div>
    );
  }
}
