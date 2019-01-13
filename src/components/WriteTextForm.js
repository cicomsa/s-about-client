import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addText } from '../actions/texts';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { thoughtStyles } from './styles';

class WriteTextForm extends PureComponent {
  state = { sent: false };

  handleSubmit = e => {
    e.preventDefault();
    let splitState = [];
    if (this.state.todays !== undefined)
      if (this.state.todays.includes('\n')) {
        splitState.push(this.state.todays.split('\n'));
      }
    if (splitState.length > 0) {
      splitState.map(text => this.props.addText(text));
    } else if (this.state.todays !== undefined) {
      this.props.addText(this.state.todays);
    }
    this.setState({ todays: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes, texts } = this.props;

    if (!texts) return null;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          id="todaySAbout"
          name="todays"
          label="Today's"
          type="search"
          margin="normal"
          multiline
          className={classes.TextField}
          value={this.state.todays || ''}
          onChange={this.handleChange}
        />
        <Button
          onClick={this.textColor}
          color="primary"
          className={classes.button}
          variant="outlined"
          type="submit"
        >
          Enter
        </Button>
      </form>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    texts: state.texts
  };
};

export default withStyles(thoughtStyles)(
  connect(
    mapStateToProps,
    { addText }
  )(WriteTextForm)
);
