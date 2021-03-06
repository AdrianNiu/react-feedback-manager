import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Understand extends Component {

   
    

    state = {
        feedback: {
            understanding: '',
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
        console.log(`Adding understand`, this.state.feedback.understanding);
        if (this.state.feedback.understanding === '') {
            alert('Please input your value to proceed.');
        } else {

        this.props.dispatch({ type: 'SET_UNDERSTAND', payload: this.state.feedback })
         this.props.history.push('/support');
        }
    }

    handleSubmitPrevious = (event) => {
        event.preventDefault();

        // this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feedback })
        this.props.history.push('/');
    }

    render() {
        return (
            <div>

                <main>
                    <h2>Daily Feedback</h2>
                    <h2>How are your understanding today?</h2>
                    <form>

                        <TextField
                            type="text"
                            value={this.state.feedback.understanding}
                            onChange={(event) => { this.handleChangeFor('understanding', event) }}
                            required
                            id="standard-with-placeholder"
                            label="Understanding?  1 - 5"
                            placeholder="Understanding?  Scale: 1 - 5"
                            margin="normal"
                        /> 
                        {/* <input type="text" placeholder="Understanding?  Scale: 1 - 5" value={this.state.feedback.understanding}
                            onChange={(event) => this.handleChangeFor('understanding', event)} /> */}
                        
                    </form>
                    <nav>
                        <Button variant="contained" color="secondary" type="submit" onClick={this.handleSubmitPrevious}>Back</Button>
                        <Button variant="contained" color="secondary" type="submit" onClick={this.handleSubmit}>Next</Button>
                        
                        
                        {/* <button type="submit" onClick={this.handleSubmitPrevious}>Back</button> */}
                        {/* <button type="submit" onClick={this.handleSubmit}>Next</button> */}
                    </nav>
                </main>
            </div>
        );
    }
}


export default withRouter(connect()(Understand));