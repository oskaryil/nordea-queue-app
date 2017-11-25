import { Component } from 'preact';
import TextSpeechInput from '../../components/text-speech-input';

export default class ChatBot extends Component {
    state = {
        messages: []
    };

    render() {
        const skipButton = <button className="basic-button">Skip</button>;

        return <main className="chat">
            <ul className="balloons-list">{
                this.state.messages.map(message =>
                    <li className={`balloon-wrapper ${ message.owner }`}>
                        <div className="balloon">
                            { message.content }
                        </div>
                        {message.owner === 'bot'
                                ? skipButton
                                : null}
                    </li>
                )
            }</ul>
            <TextSpeechInput />
        </main>
    }
}
