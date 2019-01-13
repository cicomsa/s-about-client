import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import { searchBarStyles } from './styles';

class SearchBar extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Toolbar className={classes.toolbar}>
        <TextField
          error
          id="standard-search"
          label="Search"
          name="search"
          type="search"
          margin="normal"
          value={this.props.searchFor || ''}
          onChange={this.props.search}
          className={classes.searchBar}
        />
      </Toolbar>
    );
  }
}

export default withStyles(searchBarStyles)(SearchBar);
