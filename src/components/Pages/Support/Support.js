import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

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

        // POST request to add new customer
        // axios.post('/api/order', this.state.newCustomer)
        //     .then(response => {
        //         console.log('Added successfully');
        //     })
        //     .catch(error => {
        //         console.log('Error adding customer', error);
        //     })

        this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.feedback })
        this.props.history.push('/comment');
    }

    render() {
        return (
            <div>

                <main>
                    <h2>How do you feel support today?</h2>
                    <form>
                        <input type="text" placeholder="Support?  Scale: 1 - 5" value={this.state.feedback.support}
                            onChange={(event) => this.handleChangeFor('support', event)} />

                    </form>
                    <nav>
                        <button type="submit" onClick={this.handleSubmit}>Next</button>
                    </nav>
                </main>
            </div>
        );
    }
}


export default withRouter(connect()(Support));