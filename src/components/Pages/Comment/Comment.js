import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

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

        // POST request to add new customer
        // axios.post('/api/order', this.state.newCustomer)
        //     .then(response => {
        //         console.log('Added successfully');
        //     })
        //     .catch(error => {
        //         console.log('Error adding customer', error);
        //     })

        this.props.dispatch({ type: 'SET_COMMENT', payload: this.state.feedback })
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>

                <main>
                    <h2>Want to leave any comments?</h2>
                    <form>
                        <input type="text" placeholder="Any Comments?" value={this.state.feedback.comments}
                            onChange={(event) => this.handleChangeFor('comments', event)} />

                    </form>
                    <nav>
                        <button type="submit" onClick={this.handleSubmit}>Next</button>
                    </nav>
                </main>
            </div>
        );
    }
}


export default withRouter(connect()(Comment));