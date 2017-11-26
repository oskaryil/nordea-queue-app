import { Component } from 'preact';

export default class TextSpeechInput extends Component {
    render() {
        return <label class="icon speech">
            <span class="icon"></span>
            <input type="text"
                   placeholder="placeholder..."
            />

        </label>;
    }
}
