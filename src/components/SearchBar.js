import React, { PureComponent } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';

class SearchBar extends PureComponent {
  render() {
    return (
      <Toolbar
        style={{
          minHeight: 40,
          color: 'white',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          marginTop: 0,
          marginBottom: 10
        }}
      >
        <TextField
          error
          id="standard-search"
          label="Search"
          name="search"
          type="search"
          margin="normal"
          value={this.props.searchFor || ''}
          onChange={this.props.search}
          style={{
            marginLeft: 4,
            width: '98%'
          }}
        />
      </Toolbar>
    );
  }
}

export default SearchBar;
