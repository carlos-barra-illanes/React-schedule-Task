import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop:'5%'
    },
  }));
  
  export default function ErrorApp(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Alert variant="filled" severity="error">
        {props.msje}
        </Alert>
      </div>
    );
  }

