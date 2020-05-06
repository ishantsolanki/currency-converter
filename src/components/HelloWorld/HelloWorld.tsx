import React from 'react';
import Card from '@material-ui/core/Card';
import useStyles from './Styles.ts';
import CardContent from '@material-ui/core/CardContent';

const HelloWorld: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
          I am a card
      </CardContent>
    </Card>
  );
};

export default HelloWorld;
