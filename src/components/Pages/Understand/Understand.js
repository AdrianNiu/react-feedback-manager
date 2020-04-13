import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

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

        // POST request to add new customer
        // axios.post('/api/order', this.state.newCustomer)
        //     .then(response => {
        //         console.log('Added successfully');
        //     })
        //     .catch(error => {
        //         console.log('Error adding customer', error);
        //     })

        this.props.dispatch({ type: 'SET_UNDERSTAND', payload: this.state.feedback })
         this.props.history.push('/support');
    }

    render() {
        return (
            <div>

                <main>
                    <h2>How are your understanding today?</h2>
                    <form>
                        <input type="text" placeholder="Understanding?  Scale: 1 - 5" value={this.state.feedback.understanding}
                            onChange={(event) => this.handleChangeFor('understanding', event)} />
                        
                    </form>
                    <nav>
                        <button type="submit" onClick={this.handleSubmit}>Next</button>
                    </nav>
                </main>
            </div>
        );
    }
}


export default withRouter(connect()(Understand));