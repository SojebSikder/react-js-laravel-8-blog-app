import React, {useState, useEffect} from 'react'
import AuthService from '../../services/AuthService';
import UrlHelper from '../../helpers/UrlHelper';
// Material ui
import { Button, Container, CssBaseline } from '@material-ui/core'
// End Material ui

export default function Settings(props) {

    const onClickLogout=()=>
    {
        AuthService.logout((res)=>{
            UrlHelper.redirectTo(props, '/login');
        });
    }

    useEffect(() => {
        // check if user logged in or not
        if (AuthService.isLogged() == false){
            UrlHelper.redirectTo(props, '/login');
        }
    }, []);

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
