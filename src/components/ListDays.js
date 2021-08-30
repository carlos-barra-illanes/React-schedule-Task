import React from "react";

import { useEffect, useState } from "react";
import DayCard from "./DayCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ListDays(props) {

  const [days, setDays] = useState(props.days);

  useEffect(() => {
    setDays(props.days);

  }, [props.days]);
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center">      
          {days && days.map((c) => 
          <DayCard key={c.dayId} id={c.dayId} tasks={c.tasks} ></DayCard>)
          }      
      </Grid>
    </div>
  );
}
