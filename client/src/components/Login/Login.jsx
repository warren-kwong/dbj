import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Card className="login">
          <InputBase placeholder="Username" className="login__items" />
          <InputBase
            placeholder="Password"
            type="password"
            className="login__items"
          />
          <div className="login__items" />
          <Button variant="contained" color="primary">
            Login
          </Button>
          <div className="login__items" />
          <Button component={Link} to="/home" color="primary">
            Sign Up
          </Button>
        </Card>
      </div>
    );
  }
}
