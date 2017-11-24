import { h, Component } from "preact";
import SwipeableViews from "react-swipeable-views";
import IntroTextsComponent from "./introTextsComponent";
import introTexts from "../../intro";

export default class Intro extends Component {
  render() {
    const styles = {
      slide: {
        padding: 15,
        minHeight: 100,
        color: "#fff"
      },
      slide1: {
        background: "#FEA900"
      },
      slide2: {
        background: "#B3DC4A"
      },
      slide3: {
        background: "#6AC0FF"
      }
    };

    const texts = introTexts.map(text => {
      console.log(text);
      return (
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
              {text.title}
              {text.description}
        </div>
      );
    });

    return (
      <div>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <SwipeableViews>
          {texts}
        </SwipeableViews>
      </div>
    );
  }
}
// <SwipeableViews>
//         <div style={Object.assign({}, styles.slide, styles.slide1)}>
//           {texts}
//         </div>
//         {/*<div style={Object.assign({}, styles.slide, styles.slide2)}>
//           {introTexts.second_slide.title}
//         </div>
//         <div style={Object.assign({}, styles.slide, styles.slide3)}>
//           {introTexts.third_slide.title}
//         </div>*/}
//       </SwipeableViews>
