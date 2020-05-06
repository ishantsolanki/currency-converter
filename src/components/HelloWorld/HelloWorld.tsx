import React from 'react';
import Card from '@material-ui/core/Card';
import useStyles from './Styles';
import { Link } from 'react-navi';
import CardContent from '@material-ui/core/CardContent';

const HelloWorld: React.FC = () => {
  const classes = useStyles();
  return (
    <>
    <Link href="/">Go to root</Link>
    <Card className={classes.root}>
      <CardContent>
          I am a card
      </CardContent>
    </Card>
    </>
  );
};

export default HelloWorld;
