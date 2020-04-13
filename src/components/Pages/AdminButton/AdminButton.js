import React, { Component } from 'react';

//in order to use redux on a component
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';




class AdminButton extends Component {

    enterAdmin = (event) => {
        event.preventDefault();
        this.props.history.push('/admin');
    }

    render() {
        return (
            <button type="submit" onClick={this.enterAdmin}>Admin</button>
        )
    }
}



export default withRouter(connect()(AdminButton));



