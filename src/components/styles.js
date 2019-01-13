export const thoughtStyles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 0,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

export const checkboxStyles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

export const cardStyles = {
  card: {
    width: '100%'
  }
};

export const searchBarStyles = {
  toolbar: {
    minHeight: 40,
    color: 'white',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 0,
    marginBottom: 10
  },
  searchBar: {
    marginLeft: 4,
    width: '98%'
  }
};
