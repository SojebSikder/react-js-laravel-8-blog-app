import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from "react-router-dom";
import AuthService from '../../services/AuthService';
import AlertMsg from './../AlertMsg';
import Copyright from './../Copyright';
import UrlHelper from '../../helpers/UrlHelper';

// Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SessionService from '../../services/SessionService';
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


export default function Login(props) {

    // User information
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Error handling variable
    const [alert_message, setAlert_message] = useState('');

    const classes = useStyles();



    // Get value from input and set state
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    // create user account
    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: username,
            password: password
        }
        AuthService.login(user, (res) => {

            if (res.data.success == true) {
                // Set session
                SessionService.set("token", res.data.token);
                for (var i in res.data.user) {
                    SessionService.set("user." + i, res.data.user[i]);
                }
                setAlert_message('success');
                return props.history.push('/profile');
            } else {
                setAlert_message('error');
                SessionService.removeAll();
            }


        }, (error) => {

        });
    }



    useEffect(() => {

        // check if user logged in or not
        if (AuthService.isLogged() == true) {
            UrlHelper.redirectTo(props, '/profile');
            //return <Redirect to='/profile' />;
        }

    }, [])


    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
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
                        Login
                </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                    </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/register" variant="body2">
                                {"Don't have an account? Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Copyright />
        </Container>
    );
}


