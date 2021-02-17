import React from 'react'
// Material ui
import { Button, Container, CssBaseline } from '@material-ui/core'
// End Material ui
import AuthService from '../services/AuthService';

export default function Settings() {

    const onClickLogout=()=>
    {
        AuthService.logout((res)=>{
            console.log(res.data.message);
        });
    }

    return (
        <Container>
            <br />
            <CssBaseline />
            <h2>Settings pages</h2>
            <hr/>
            <Button 
            variant="contained" 
            color="primary"
            onClick={onClickLogout}
            >Logout</Button>
        </Container>
    )
}
