import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getTodays } from '../actions/todays';
import SimpleCard from './Card';
import SearchBar from './SearchBar';

class DisplayTodaysPage extends PureComponent {
  state = { search: '' };
  componentWillMount() {
    this.props.getTodays();
  }

  searchToday = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { todays } = this.props;
    if (!todays) return null;

    const search = this.state.search;
    const filteredTodays = todays.filter(
      today => today.todays.includes(search) || today.date.includes(search)
    );

    return (
      <div>
        <div className="todays-wrapper">
          {filteredTodays.map(today => (
            <div key={today.id} className="card-wrapper">
              <SimpleCard todays={today.todays} date={today.date} />
            </div>
          ))}
        </div>
        <SearchBar searchFor={this.state.search} search={this.searchToday} />
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
