import React from 'react';
import {
  StyledContainer
} from './Styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  }
});


const HelloWorld: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <StyledContainer>
          I am a card
        </StyledContainer>
      </CardContent>
    </Card>
  );
};

export default HelloWorld;
