import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      showLoginErrorAlert: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async handleLogin(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const body = { username, password };
    try {
      const data = await axios.post(
        'http://localhost:7000/api/auth/login',
        body
      );
      localStorage.setItem('userId', data.data._id);
      document.cookie = `token=${JSON.parse(data.headers.auth).token}`;
      this.props.history.push('/dashboard');
    } catch (err) {
      console.log('incorrect credentials');
      throw new Error(err);
    }
  }

  render() {
    return (
      <div className="login-page-layout">
        <Card className="login">
          <Typography variant="h6" align="center">
            Login
          </Typography>
          <InputBase
            placeholder="Username"
            className="login__items"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <InputBase
            placeholder="Password"
            type="password"
            className="login__items"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <div className="login__items login-btns-row">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleLogin}
            >
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

export default withRouter(Login);
