import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

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
                        <input type="text" placeholder="Feeling?  Scale: 1 - 5" value={this.state.feedback.feeling}
                            onChange={(event) => this.handleChangeFor('feeling', event)} />
                        
                    </form>
                    <nav>
                        <button type="submit" onClick={this.handleSubmit}>Next</button>
                    </nav>
                </main>
            </div>
        );
    }
}

export default withRouter(connect()(Feeling));