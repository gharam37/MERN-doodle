import React, { Component } from 'react';
import SignIn from './components/SignIn.js';
import Image from './components/Image.js';
import "./index.css";


import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router><Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/upload" component={Image} />

      <Redirect to="/" />
    </Switch></Router>
      
    );
  }
}

export default App;