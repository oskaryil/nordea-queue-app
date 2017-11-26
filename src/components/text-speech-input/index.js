import { Component } from 'preact';

export default class TextSpeechInput extends Component {
    submitNewValue(event) {
        if (event.key === 'Enter') {
            this.props.onNewValue(event.target.value);
            event.target.value = '';
        }
    }

    render() {
        return <label class="icon speech">
            <span class="icon"></span>
            <input type="text"
                   placeholder="placeholder..."
                   onKeyPress={this.submitNewValue.bind(this)}
            />
        </label>;
    }
}
