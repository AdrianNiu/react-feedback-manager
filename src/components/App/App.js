import React, { Component } from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// Import Home into pages
import Home from '../Pages/Home/Home';
import Understand from '../Pages/Understand/Understand';
import Support from '../Pages/Support/Support';
import Comment from '../Pages/Comment/Comment';
import Review from '../Pages/Review/Review';
import Thank from '../Pages/Thank/Thank';

import { withRouter } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/understand' component={Understand} />
          <Route path='/support' component={Support} />
          <Route path='/comment' component={Comment} />
          <Route path='/review' component={Review} />
          <Route path='/thank' component={Thank} />
        </Router> 
      </div> 
    );
  }
}

export default withRouter(App);
