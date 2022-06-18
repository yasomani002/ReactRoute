import { Grid, Input, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { useState } from "react";
import ThankyouCard from "./ThankyouCard";

const useStyle = makeStyles({
    root: {
        height: '350px',
        width: '400px',
        border: '1px solid #000000'
    },
    form: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default function LoginCard() {
    const classes = useStyle()

    const [Login, setLogin] = useState()
    const [submit, setSubmit] = useState(true)

    const onSubmit = () => {
        setLogin(true)
        setSubmit(false)
    }
    return (
        <>
            {submit && <Grid className={classes.root}>
                <Grid className={classes.form}>
                <label>Email Id</label>
                <br />
                <Input name="email" type="email" value="" />

                <br />
                <label>Password</label>
                <br />
                <Input name="password" type="password" value="" />

                <br />
                <Button onClick={onSubmit}>Submit</Button>
                </Grid>
            </Grid>}
            {Login && <ThankyouCard />}
        </>
    )
}