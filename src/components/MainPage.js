import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import WriteTextForm from './WriteTextForm';
import AddTodays from './AddTodays';
import DisplayTodaysPage from './DisplayTodays';

class MainPage extends PureComponent {
  state = { visible: false };

  flipPage = e => {
    console.log('hi')
    this.setState({ visible: !this.state.visible });
  };
  render() {
    const { authenticated } = this.props;
    if (!authenticated) return <Redirect to="/login" />;

    return (
      // <div className="">
      //   <h1 className="fixed-title">~ 's about ~</h1>
      //   <DisplayTodaysPage />
      // </div>
      <div
        className={
          this.state.visible ? 'card-container flip-page' : 'card-container'
        }
        onDoubleClick={this.flipPage}
      >
        <div className="card-body">
          <div className="front-side">
            <h1>~ 's about ~</h1>
            <WriteTextForm />
            <br />
            <AddTodays />
          </div>
          <div className="back-side">
            <h1 className="fixed-title">~ 's about ~</h1>
            <DisplayTodaysPage />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    authenticated: state.currentUser !== null
  };
};

export default connect(mapStateToProps)(MainPage);
