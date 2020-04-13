import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Comment extends Component {




    state = {
        feedback: {
            comments: '',
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            feedback: {
                ...this.state.feedback,
                [propertyName]: event.target.value
            }
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding comments`, this.state.feedback.comments);

        this.props.dispatch({ type: 'SET_COMMENT', payload: this.state.feedback })
        this.props.history.push('/review');
    }

    handleSubmitPrevious = (event) => {
        event.preventDefault();

        // this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feedback })
        this.props.history.push('/support');
    }

    render() {
        return (
            <div>

                <main>
                    <h2>Daily Feedback</h2>
                    <h2>Want to leave any comments?</h2>
                    <form>

                        <TextField
                            type="text"
                            value={this.state.feedback.comments}
                            onChange={(event) => { this.handleChangeFor('comments', event) }}
                            required
                            id="standard-with-placeholder"
                            label="Any Comments?"
                            placeholder="Comments? (Optional)"
                            margin="normal"
                        /> 
                        {/* <input type="text" placeholder="Any Comments? (Optional)" value={this.state.feedback.comments}
                            onChange={(event) => this.handleChangeFor('comments', event)} /> */}

                    </form>
                    <nav>
                        <Button variant="contained" color="secondary" type="submit" onClick={this.handleSubmitPrevious}>Back</Button>
                        <Button variant="contained" color="secondary" type="submit" onClick={this.handleSubmit}>Next</Button>
                        {/* <button type="submit" onClick={this.handleSubmitPrevious}>Back</button>
                        <button type="submit" onClick={this.handleSubmit}>Next</button> */}
                    </nav>
                </main>
            </div>
        );
    }
}


export default withRouter(connect()(Comment));