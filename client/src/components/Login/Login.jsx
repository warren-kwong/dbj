import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login-page-layout">
        <Card className="login">
          <Typography variant="h6" align="center">
            Login
          </Typography>
          <InputBase placeholder="Username" className="login__items" />
          <InputBase
            placeholder="Password"
            type="password"
            className="login__items"
          />
          <div className="login__items login-btns-row">
            <Button variant="contained" color="primary">
              Login
            </Button>
            <Button component={Link} to="/register" color="primary">
              Register
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}