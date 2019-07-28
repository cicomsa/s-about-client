import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { checkboxStyles } from './styles';
import { addTodays } from '../actions/todays';
import { removeText } from '../actions/texts';

class AddTodays extends PureComponent {
  handleSubmit = event => {
    this.props.addTodays({
      todays: event.target.innerHTML,
      date: new Date().toJSON().slice(0, 10)
    });
    this.props.removeText(event.target.innerHTML);
  };

  render() {
    const { authenticated, texts } = this.props;
    if (!authenticated) return <Redirect to="/login" />;

    if (!texts) return null;

    return (
      <div className="texts">
      {texts.map((value, i) => {
        return (
          <p key={i} onClick={e => this.handleSubmit(e)}>
            {value}
          </p>
        )
      })}
      </div>
    )
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
