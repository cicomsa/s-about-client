import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class LoginForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField
            id="email"
            name="email"
            label="Email"
            type="email"
            margin="normal"
            onChange={this.handleChange}
            value={this.state.email || ''}
            required
          />
        </div>

        <div>
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            margin="normal"
            onChange={this.handleChange}
            value={this.state.password || ''}
            required
          />
        </div>

        <Button color="primary" variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    );
  }
}
