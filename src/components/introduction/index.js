import { h, Component } from "preact";
import SwipeableViews from "react-swipeable-views";
import introTexts from "../../intro";
import './styles.css'

export default class Intro extends Component {
  state = {
    activeIndex: null
  };

  handleChange = index => {
    this.setState({
      activeIndex: index
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;
    //console.log(index);
    const styles = {
      slide: {
        padding: 15,
        minHeight: 100,
        color: "red"
      },
      slide1: {
        background: "#FEA900"
      },
      slide2: {
        background: "#B3DC4A"
      },
      introSlide: {
        backgroundColor: "#6AC0FF"
      }
      // intro-bullets: {
      //   borderRadius: 50%,
      //   backgroundColor: red;
      // }
    };

    const bullets = introTexts.map((_, i)=> {
      return (
        <span 
          index={i} 
          isActive={ this.state.activeIndex === i }
          onClick={this.handleChange} style={{borderRadius: '50%'}}
          className={
            this.props.isActive ? 'active' : 'album'
      }
        >*</span>
      )

    })

    const texts = introTexts.map((text, i) => {
      console.log('index', index)
      return (
        <div className={"introSlide ${i+1}"}>
          {text.title}
          {text.description}
        </div>
      );
    });

    return (
      <div className={`slides-wrapper selected-${index}`}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {texts}
        </SwipeableViews>
          <span className="bullets">{bullets}</span>
      </div>
    );
  }
}
