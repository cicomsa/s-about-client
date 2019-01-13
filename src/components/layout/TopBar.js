import React from 'react';
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const TopBar = props => {
  const { location, history } = props;

  return (
    <AppBar
      position="fixed"
      style={{ zIndex: 10, backgroundColor: 'rgba(0, 0, 0)' }}
    >
      <Toolbar>
        <Typography variant="button" color="inherit" style={{ flex: 1 }}>
          ~ today's
        </Typography>

        {location.pathname.indexOf('signup') > 0 && (
          <Button color="inherit" onClick={() => history.push('/login')}>
            Login
          </Button>
        )}
        {location.pathname.indexOf('login') > 0 && (
          <Button color="inherit" onClick={() => history.push('/signup')}>
            Sign up
          </Button>
        )}

        {location.pathname.indexOf('todays') > 0 && (
          <Button color="inherit" onClick={() => history.push('/logout')}>
            Log out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(TopBar);
