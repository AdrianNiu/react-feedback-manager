import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Review extends Component {

    handleClick = (event) => {
        event.preventDefault();
        let fbDetails = {
            feeling: this.props.feeling.feeling,
            understanding: this.props.understanding.understanding,
            support: this.props.support.support,
            comments: this.props.comments.comments,
        }
        console.log('Got a checkout', fbDetails);
        axios.post('/feedback', fbDetails)
            .then((result) => {
                console.log('Posted to the server');
                this.props.history.push('/');
            })
            .catch((error) => {
                alert(`Couldn't submit your feedback. Please try again`);
                console.log('Got an error.', error);
            })
    }; //end handle click

    render() {
        return (
            <div>
                <h2>Please review your feedback submission:</h2>
                <div>
                    <br />
                    <p>Feeling: {this.props.feeling.feeling}</p>
                    <br />
                    <p>Understanding: {this.props.understanding.understanding}</p>
                    <br />
                    <p>Support:{this.props.support.support}</p>
                    <br />
                    <p>Comments: {this.props.comments.comments}</p>
                    <br />
                </div>
               

                <button onClick={(event) => this.handleClick(event)}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    feeling: reduxStore.feeling, 
    understanding: reduxStore.understanding, 
    support: reduxStore.support, 
    comments: reduxStore.comments,
})

export default withRouter(connect(mapStateToProps)(Review));