import { Component } from 'preact';
import TextSpeechInput from '../../components/text-speech-input';

export default class ChatbotPrep {

    state = {
        choices: [
            'To convert currency',
            'To open an account',
            'To pay my bills'
        ]
    };

    render() {
        return <main className="chatbot-prep">
						<h1>Nordea Queue</h1>
            Why are you here?

            <section className="choices">{
                this.state.choices.map(content =>
                    <button className="basic-button centered">
                        {content}
                    </button>
                )
            }</section>

            Or type your errand

            <TextSpeechInput />
        </main>


    }
}
