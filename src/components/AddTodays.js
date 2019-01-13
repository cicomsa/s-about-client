import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { checkboxStyles } from './styles';
import { addTodays } from '../actions/todays';
import { removeText } from '../actions/texts';

class AddTodays extends PureComponent {
  handleSubmit = event => {
    this.props.addTodays({ todays: event.target.value });
    this.props.removeText(event.target.value);
  };

  render() {
    const { classes, authenticated, texts } = this.props;
    if (!authenticated) return <Redirect to="/login" />;

    if (!texts) return null;

    return (
      <List className={classes.root}>
        {texts.map((value, i) => (
          <ListItem
            key={i}
            role={undefined}
            dense
            button
            onClick={this.handleSubmit}
          >
            <Checkbox tabIndex={-1} disableRipple value={value} />
            <ListItemText primary={value} />
          </ListItem>
        ))}
      </List>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    texts: state.texts,
    authenticated: state.currentUser !== null
  };
};

export default withStyles(checkboxStyles)(
  connect(
    mapStateToProps,
    { addTodays, removeText }
  )(AddTodays)
);
