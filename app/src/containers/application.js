import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions/app';

import Greeting from '../components/greeting';

export class Container extends Component {
    constructor(props) {
        super(props)
        this.getGreeting = this.getGreeting.bind(this)
    }

    getGreeting = () => {
        this.props.action.getGreeting();
    }

    render() {
        const { greeting, language, country } = this.props.app
        return (
            <Greeting
                greeting={greeting}
                language={language}
                country={country}
                getGreeting={this.getGreeting}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        app: state.app,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);