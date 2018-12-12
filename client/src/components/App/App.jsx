import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Landing from '../Landing/Landing.jsx';
import Login from '../Login/Login.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Register from '../Register/Register.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}
