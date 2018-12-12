import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { Add } from '@material-ui/icons';
import {
  AppBar,
  Button,
  Card,
  CardContent,
  Toolbar,
  Typography
} from '@material-ui/core';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      userSpreads: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(e) {
    e.preventDefault();
    const newSpread = await axios.post(
      `http://localhost:7000/api/spread/create/${localStorage.userId}`
    );
    console.log('spread created: ', newSpread.data);
    this.setState({
      userSpreads: [...this.state.userSpreads, newSpread.data]
    });
  }

  async componentDidMount() {
    const spreads = await axios.get(
      `http://localhost:7000/api/spread/getAll/${localStorage.userId}`
    );
    console.log(spreads.data);
    if (spreads) {
      this.setState({
        loading: false,
        userSpreads: spreads.data
      });
    }
  }

  render() {
    let spreads = this.state.userSpreads;

    if (!localStorage.userId) {
      return <Redirect push to="/" />;
    } else if (this.state.loading) {
      return <div>loading...</div>;
    } else {
      return (
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h4" color="inherit">
                Dashboard
                <Button onClick={this.handleClick}>
                  <Add />
                </Button>
              </Typography>
            </Toolbar>
          </AppBar>
          <div>
            {spreads.map(spread => (
              <Card key={spread._id}>
                <CardContent>
                  <Typography>
                    {spread.title}, {spread.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
    }
  }
}
