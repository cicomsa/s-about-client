import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { cardStyles } from './styles';

class TodaysCard extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {this.props.date}
          </Typography>
          <Typography component="p">{this.props.todays}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(cardStyles)(TodaysCard);
