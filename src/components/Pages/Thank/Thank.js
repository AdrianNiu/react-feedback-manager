import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

class Thank extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        
            // this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feedback })
            this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <header>Thank you for your submission!</header>
                <br/>
                <button onClick={(event) => this.handleSubmit(event)}>Leave New Feedback</button>
            </div>
        );
    }
}


export default withRouter(connect()(Thank));