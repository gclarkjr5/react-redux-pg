import React, { Component } from 'react';
import { setInterval } from 'timers';

class Greeting extends Component {

    componentDidMount() {
        setInterval(() => {
            this.props.getGreeting();
        }, 5000)
    }

    render() {

        return (
            <div>
                <h1>Welcome</h1>
                <h2>{this.props.greeting}</h2>
                <h3>Language: {this.props.language}</h3>
                <p>Spoken in: {this.props.country}</p>
            </div>
        )
    }

}

export default Greeting;