import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




class Feeling extends Component {

    state = {
        feedback: {
            feeling: '',
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
        console.log(`Adding feeling`, this.state.feedback.feeling);
        if (this.state.feedback.feeling === ''){
            alert('Please input your value to proceed.');
        } else {
            this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feedback })
            this.props.history.push('/understand');
        }
        
    }

   

    render() {
        return (
            <div>
                
                <main>
                    <h2>How are you feeling today?</h2>
                    <form>
                        
                        <TextField
                            type="text"
                            value={this.state.feedback.feeling}
                            onChange={(event) => { this.handleChangeFor('feeling', event) }}
                            required
                            id="standard-with-placeholder"
                            label="Feeling? Scale: 1 - 5"
                            placeholder="Feeling?  Scale: 1 - 5"
                            margin="normal"
                        /> 
                        
                        
                        
                        
                        
                        {/* <input type="text" placeholder="Feeling?  Scale: 1 - 5" value={this.state.feedback.feeling}
                            onChange={(event) => this.handleChangeFor('feeling', event)} /> */}
                        
                    </form>
                    <nav>
                        <Button variant="contained" color="secondary" type="submit" onClick={this.handleSubmit}>
                            Next
                        </Button>
                        {/* <button type="submit" onClick={this.handleSubmit}>Next</button> */}
                    </nav>
                </main>
            </div>
        );
    }
}

export default withRouter(connect()(Feeling));