import { Component } from 'preact';
import { connect } from "react-redux";
import TextSpeechInput from '../../components/text-speech-input';
import toProps from './stateToProp';
import { addMessage, queryBot } from './actions';

class ChatBot extends Component {
    addMessage(msg) {
        this.props.addMessage(msg, 'customer');
        this.props.queryBot(msg, this.props.step);
    }

    componentDidMount() {
        this.props.queryBot(this.props.messages[0].content, this.props.step);
    }

    render() {
        const skipButton = <button className="basic-button">Skip</button>;

        return <main className="chat">
            <ul className="balloons-list">{
                this.props.messages.map(message =>
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
            <TextSpeechInput
                onNewValue={this.addMessage.bind(this)}
            />
        </main>
    }
}

export default connect(toProps, {addMessage, queryBot})(ChatBot);
