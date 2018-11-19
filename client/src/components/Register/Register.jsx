import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import './Register.css';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      showPasswordAlert: false,
      showerUsernameAlert: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async register(e) {
    e.preventDefault();
    const { username, password, passwordConfirm } = this.state;
    const payload = {
      username,
      password
    };
    if (password !== passwordConfirm) {
      // toggle error message
      console.log('passwords do not match!');
    } else {
      try {
        const data = await axios.post(
          'http://localhost:7000/api/auth/register',
          payload
        );
        if (data.data == 'username already exists.') {
          console.log('Username already exists');
          // *insert indicator
        } else {
          console.log('user registered');
        }
      } catch (err) {
        console.log('catch', err);
        throw new Error(err);
      }
    }
  }

  render() {
    return (
      <div className="register-page-layout">
        <Card className="register">
          <Typography variant="h6" align="center">
            Register
          </Typography>
          <InputBase
            placeholder="Username"
            className="register__items"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <InputBase
            placeholder="Password"
            type="password"
            className="register__items"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <InputBase
            placeholder="Re-type Password"
            type="password"
            className="register__items"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleInputChange}
          />
          <div className="register__items register-btns-row">
            <Button variant="contained" color="primary" onClick={this.register}>
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
