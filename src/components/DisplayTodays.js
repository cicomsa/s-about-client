import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getTodays } from '../actions/todays';
import SimpleCard from './Card';

class DisplayTodaysPage extends PureComponent {
  componentWillMount() {
    this.props.getTodays();
  }

  render() {
    const { todays } = this.props;
    if (!todays) return null;

    return (
      <div className="todays-wrapper">
        {todays.map(today => (
          <div key={today.id} className="card-wrapper">
            <SimpleCard todays={today.todays} date={today.date} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    todays: state.todays
  };
};

export default connect(
  mapStateToProps,
  { getTodays }
)(DisplayTodaysPage);
