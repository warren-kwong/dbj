import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from '../Welcome/Welcome.jsx';
import Home from '../Home/Home.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}
