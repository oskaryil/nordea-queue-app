import { h, Component } from 'preact'
import introTexts from '../../intro'

const IntroTextsComponent = (props) => {
  const hello = introTexts.map(text => {  
    console.log(text)
    return (
      <div>
        <p>tes</p>
        {text.title}
        {text.description}
      </div>
    ) 
  })
}

export default IntroTextsComponent