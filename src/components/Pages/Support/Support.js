import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Support extends Component {




    state = {
        feedback: {
            support: '',
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
        console.log(`Adding support`, this.state.feedback.support);

        if (this.state.feedback.support === '') {
            alert('Please input your value to proceed.');
        } else {

            this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.feedback })
            this.props.history.push('/comment');
        }
    }

    handleSubmitPrevious = (event) => {
        event.preventDefault();

        // this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feedback })
        this.props.history.push('/understand');
    }

    render() {
        return (
            <div>

                <main>
                    <h2>Daily Feedback</h2>
                    <h2>How do you feel support today?</h2>
                    <form>

                        <TextField
                            type="text"
                            value={this.state.feedback.support}
                            onChange={(event) => { this.handleChangeFor('support', event) }}
                            required
                            id="standard-with-placeholder"
                            label="Support?  1 - 5"
                            placeholder="Support?  Scale: 1 - 5"
                            margin="normal"
                        /> 

                        {/* <input type="text" placeholder="Support?  Scale: 1 - 5" value={this.state.feedback.support}
                            onChange={(event) => this.handleChangeFor('support', event)} /> */}

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


export default withRouter(connect()(Support));