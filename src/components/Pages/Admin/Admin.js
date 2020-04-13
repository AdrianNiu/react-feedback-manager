import React, { Component } from 'react';

//Import Axios
import axios from 'axios';

//Connect to the redux store
import { connect } from 'react-redux';

//Import to do routing
import { withRouter } from 'react-router-dom';

import './Admin.css'


export class Admin extends Component {

    componentDidMount() {
        this.getFeedback();
    }


    getFeedback = () => {
        axios.get('./feedback')
            .then(response => {
                console.log('Feedback', response.data);
                this.props.dispatch({ type: 'SET_LIST', payload: response.data })
            }).catch(error => {
                console.log('error displaying Feedback', error);
            })
    }


    deleteSong = (id) => {
        console.log('Deleting song', id);
        // For delete, must put the id of the song on the URL
        axios.delete(`/songs/${id}`)
            .then((response) => {
                this.getSongs();
            })
            .catch((error) => {
                alert('Error on delete');
                console.log('Error on DELETE', error);

            })
    }

    deleteFeedback = (id) => {
        console.log('Deleted feedback', id);
        axios.delete(`/feedback/${id}`)
            .then((response) => {
                this.getFeedback();
            }).catch((error) => {
                alert('Error on delete');
                console.log('Error on DELETE', error);

            })
    }

    render() {
        return (
            <div>
                <header>
                    <h1>List of Feedback:</h1>
                </header>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Feeling</th>
                                <th>Comprehension</th>
                                <th>Support</th>
                                <th>Comments</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.fbList.map((item, i) =>
                                <tr key={i}>
                                    <td>{item.feeling}</td>
                                    <td>{item.understanding}</td>
                                    <td>{item.support}</td>
                                    <td>{item.comments}</td>
                                    <td><button type="submit" onClick={this.deleteFeedback}>Delete</button></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    fbList: reduxStore.fbList,
    
});



export default withRouter(connect(mapStateToProps)(Admin));