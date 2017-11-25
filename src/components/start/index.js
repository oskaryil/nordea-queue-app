import { Component } from 'preact';

export default class Start extends Component {
    render() {
        return <div class="start-page">
            <button class="basic-button">
                Login
            </button>
            <button class="basic-button">
                Skip Login
            </button>
            <button class="basic-button">
                New customer
            </button>
        </div>;
    }
}
