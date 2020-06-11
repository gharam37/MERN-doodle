import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './components/SignIn.js';
import Image from './components/Image.js';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router><Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/posts" component={Image} />
      <Redirect to="/" />
    </Switch></Router>
      
    );
  }
}

export default App;