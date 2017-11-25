import { Component } from 'preact';


export default class extends Component {
    render() {
        return <main class="main-page">
            What the fuck are you doing here?

            <label class="icon speech">
                <span class="icon"></span>
                <input type="text"
                       placeholder="placeholder..."
                />
            </label>


            <button class="basic-button centered">
                I just want to be in the queue
            </button>

        </main>
    }
}
