import { Button } from '@material-ui/core'
import React from 'react'
import AuthService from '../services/AuthService';

export default function Settings() {

    const onClickLogout=()=>
    {
        AuthService.logout((res)=>{
            console.log(res.data.message);
        });
    }

    return (
        <div>
            <h2>Settings pages</h2>
            <hr/>
            <Button 
            variant="contained" 
            color="primary"
            onClick={onClickLogout()}
            >Logout</Button>
        </div>
    )
}
