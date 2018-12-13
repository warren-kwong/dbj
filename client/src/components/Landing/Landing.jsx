import React, { Component } from 'react';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';

import './Landing.css';

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      isNewUser: false
    };
    this.isNewUser = this.isNewUser.bind(this);
  }

  isNewUser(bool) {
    this.setState({
      isNewUser: bool
    });
  }

  render() {
    return (
      <div className="landing-page">
        {!this.state.isNewUser ? (
          <Login isNewUser={this.isNewUser} />
        ) : (
          <Register isNewUser={this.isNewUser} />
        )}
      </div>
    );
  }
}
