import { h, Component } from "preact";
import SwipeableViews from "react-swipeable-views";
import introTexts from "../../intro";
import GetStartedBtn from "./getstartedbtn";
import "../../assets/styles/styles.css";

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
    const bullets = introTexts.map((_, i) => {
      return (
        <span onChange={this.handleChange} className="bullet">
          &nbsp;
        </span>
      );
    });

    const texts = introTexts.map((text, index) => {
      return (
        <div className="slide">
          {text.title}
          {text.description}
          {index === 2
              ? <GetStartedBtn />
              : null}
        </div>
      );
    });

    return (
      <div className={`slider selected-${index + 1}`}>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {texts}
        </SwipeableViews>
        <div className="bullets-wrapper">{bullets}</div>
      </div>
    );
  }
}
