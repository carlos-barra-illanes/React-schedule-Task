import React from 'react'
import {withStyles} from '@material-ui/core'
import {AppBar,Toolbar,Typography} from '@material-ui/core'

 function AppNav(props) {
     const {classes} = props
    return (
        <AppBar className={classes.NavColor} position="static">
           <Toolbar variant="dense">
            <Typography variant="h6" component="p"> Schedule App - Horas por dia : {props.hoursByDay}</Typography>
            </Toolbar> 
            
        </AppBar>
    )
}
export default withStyles({
    NavColor:{
        backgroundColor : '#5078EF'
    }
})(AppNav)