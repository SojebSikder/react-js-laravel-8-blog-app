import React from 'react'
import useToken from '../Hooks/useToken';
import Login from '../components/Login';

// Material ui
import { Container, CssBaseline } from '@material-ui/core';

export default function Profile() {

        // Custom hooks
        const { token, setToken } = useToken();

        if(!token) {
            return <Login />
        }
        // end

    return (
        <Container component="main" maxWidth="xs">
        <br />
        <CssBaseline />
            This is Profile page
        </Container>
    )
}
