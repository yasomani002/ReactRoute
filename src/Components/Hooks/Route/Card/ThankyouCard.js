import { Grid, Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
    root: {
        height: '350px',
        width: '400px',
        border:'1px solid red'
    }
})

export default function ThankyouCard(){
    const classes = useStyle()
    return(
        <>
        <Grid className={classes.root}>
            <NavLink to={"/"}  >Thank You</NavLink>
        </Grid>
        </>
    )
}