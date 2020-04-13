import React, { Component } from 'react';

//Import Axios
import axios from 'axios';

//Connect to the redux store
import { connect } from 'react-redux';

//Import components that are used on this home page
import Feeling from '../Feeling/Feeling';

//Import to do routing
import { withRouter } from 'react-router-dom';

class Home extends Component {
    componentDidMount() {
        
    }

    // handleChangePage = () => {
    //     //change page to info page
    //     this.props.history.push('/info');
    // }

    getFeedback = () => {
        axios.get('./feedback')
            .then(response => {
                console.log('Feedback', response.data);
                this.props.dispatch({ type: 'SET_FB', payload: response.data })
            }).catch(error => {
                console.log('error displaying Feedback', error);
            })
    }

    handleSubmit = () => {
        this.props.history.push('/info');
    }

    render() {
        return (
            <div>
                <h2>Daily Feedback</h2>
                <Feeling />
                {/* <button onClick={this.handleChangePage}>Next</button> */}
            </div>
        );
    }
}

export default withRouter(connect()(Home));