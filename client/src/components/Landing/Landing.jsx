import React, { Component } from 'react';
import Login from '../Login/Login.jsx';

import './Landing.css';

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="landing-page">
        <Login />
      </div>
    );
  }
}
