import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Landing from '../Landing/Landing.jsx';
import Home from '../Home/Home.jsx';

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
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}
