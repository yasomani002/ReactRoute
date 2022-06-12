import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    root: {
        height: '100px',
        width: '100px',
        backgroundColor: '#000000'
    }
})
export default function ProductCard () {
    const classes = useStyle()
    return (
        <>
        <Grid className={classes.root}>
        hellow world
        </Grid>
        </>
    )
}