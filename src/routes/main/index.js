import { Component } from 'preact';
import { Link } from 'preact-router/match';
import TextSpeechInput from '../../components/text-speech-input';


export default class extends Component {
    render() {
        return <main class="main-page">
            What the fuck are you doing here?

            <TextSpeechInput />

            <Link href="/prep">
                <button class="basic-button centered">
                    I just want to be in the queue
                </button>
            </Link>

        </main>
    }
}
