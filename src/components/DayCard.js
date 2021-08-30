import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
      fontWeight:'bold',
    },
    item:{
        minWidth : '#350px',
        margin: "1em",
        boxSizing: "border-box",
        backgroundColor : '#68CA4C'
    },
    pos: {
      marginBottom: 12,
    },
  });

  export default function DayCard(params) {
    const classes = useStyles();
    return (
    <Card className={classes.item} variant="outlined">
      <CardContent>
        <Typography className={classes.title}  gutterBottom>
            Identificador de el Dia :  {params.id}
        </Typography>
        {params.tasks && params.tasks.map((c) => 
         <h3 key={c.task_id} >{c.task_id}</h3> 
          )
          }
      </CardContent>

    </Card>
    )
}
