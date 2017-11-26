import { Component } from 'preact';
import { route } from 'preact-router';
import { connect } from "react-redux";
import TextSpeechInput from '../../components/text-speech-input';
import { setFirstMessage } from './action';

class ChatbotPrep extends Component {

    state = {
        choices: [
            'To convert currency',
            'To open an account',
            'To pay my bills'
        ]
    };

    startChatBot(firstQuestion) {
        this.props.setFirstMessage(firstQuestion);
    }

    render() {
        return <main className="chatbot-prep">
            Why are you here?

            <section className="choices">{
                this.state.choices.map(content =>
                    <button className="basic-button centered"
                            onClick={this.startChatBot.bind(this, content)}>
                        {content}
                    </button>
                )
            }</section>

            Or type your errand

            <TextSpeechInput
                onNewValue={this.startChatBot.bind(this)}
            />
        </main>


    }
}

export default connect(null, {setFirstMessage})(ChatbotPrep);
