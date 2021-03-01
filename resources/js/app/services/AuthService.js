import axios from "axios";
import Config from "../classes/Config";
import Userinfo from "../classes/Userinfo";
import SessionService from "./SessionService";

/**
 * Manage authentication
 */
const AuthService = {
    /**
     * Login with api
     */
    login: (data, success, fail) => {
        // const user ={
        //     username: this.state.username,
        //     password: this.state.password
        // }
        axios.post(Config.getUrl() + "/login", data)
            .then(response => {
                success(response);
            }).catch(error => {
                fail(error);
            });
    },
    /**
     * Register with api
     */
    register: (data, success, fail) => {
        axios.post(Config.getUrl() + "/register", data)
            .then(res => {
                success(res);
                //this.setState({alert_message:'success'});
            }).catch(error => {
                //this.setState({alert_message:'error'});
                fail(error);
            });
    },
    /**
     * Check if user is authenticated or not
     */
    isLogged: () => {
        if (SessionService.get('token') != null) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * Logout user
     */
    logout: (success, fail) => {
        const user = {
            token: Userinfo.getToken(),
        }
        axios.post(Config.getUrl() + "/logout", user)
            .then(res => {
                success(res);
            }).catch(error => {
                fail(error);
                //this.setState({alert_message:'error'});
            });

    },
}


export default AuthService;



// for Login
/*
axios.post(Config.getUrl()+"/user/login", user)
.then(res=>{
    if(res.data.status == 0)
    {
        this.setState({alert_message:'error'});
    }else if(res.data.status == 1){
        this.setState({alert_message:'success'});
    }

}).catch(error=>{
    this.setState({alert_message:'error'});
}); */

// for register
/*
axios.post(Config.getUrl()+"/user/register", user)
.then(res=>{
this.setState({alert_message:'success'});
}).catch(error=>{
this.setState({alert_message:'error'});
});
*/