import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import AuthService from '../services/AuthService';
import AlertMsg from './AlertMsg';

// Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './Copyright';
// End Material UI



// Style
const useStyles = makeStyles((theme) => ({
paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
},
avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
},
form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
},
submit: {
    margin: theme.spacing(3, 0, 2),
},
}));


export default function Register() {
    
    // User information
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Error handeling variable
    const [alert_message, setAlert_message] = useState('');

    const classes = useStyles();



    // Get value from input and set state
    const onChangeUsername=(e)=>
    {
        setUsername(e.target.value);
    }
    const onChangeEmail=(e)=>
    {
        setEmail(e.target.value);
    }
    const onChangePassword=(e)=>
    {
        setPassword(e.target.value);
    }
    // create user account
    const onSubmit=(e)=>
    {
        e.preventDefault();
        const user ={
            name: username,
            email: email,
            password: password
        }
        
        AuthService.register(user, (res)=>{
            setAlert_message('success');
        });
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form onSubmit={onSubmit} className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={onChangeUsername}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={onChangeEmail}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={onChangePassword}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                    <Link to="/login" variant="body2">
                        {"Already have an account? Login"}
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            <Copyright />
        </Container>
    )
}


