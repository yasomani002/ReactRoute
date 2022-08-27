import { Link } from "react-router-dom";
import LoginCard from "./Card/LoginCard";
import NavBar from "./NavBar";
import {makeStyles} from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles({
    root: {
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       height: '90vh'
    }
})
export default function Contact() {
  const classes = useStyle()
  return (
    <>
    <NavBar />
    <Grid className={classes.root}>
      <LoginCard />
      </Grid>
    </>
  );
}
