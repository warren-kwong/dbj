import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import './Register.css';

export default class Register extends Component {
  render() {
    return (
      <div className="register-page-layout">
        <Card className="register">
          <Typography variant="h6" align="center">
            Register
          </Typography>
          <InputBase placeholder="Username" className="register__items" />
          <InputBase
            placeholder="Password"
            type="password"
            className="register__items"
          />
          <InputBase
            placeholder="Re-typePassword"
            type="password"
            className="register__items"
          />
          <div className="register__items register-btns-row">
            <Button variant="contained" color="primary">
              Register
            </Button>
            <Button component={Link} to="/login" color="primary">
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}
