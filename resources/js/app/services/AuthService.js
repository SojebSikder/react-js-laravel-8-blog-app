import axios from "axios";
import Config from "../classes/Config";
import Userinfo from "../classes/Userinfo";
import SessionService from "./SessionService";

/**
 * Manage authentication
 */
class AuthService {
    constructor() {
        if (SessionService.get('token') != null) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
    }
    /**
     * Login with api
     */
    login(user, calback) {
        // const user ={
        //     username: this.state.username,
        //     password: this.state.password
        // }
        axios.post(Config.getUrl() + "/login", user)
            .then(res => {
                if (res.data.success == true) {
                    this.authenticated = true;
                    // Set sesiion
                    SessionService.set('id', res.data.user.id);
                    SessionService.set('name', res.data.user.name);
                    // whole user data
                    SessionService.set('user', JSON.stringify(res.data.user));

                    //...
                    //var storedNames = JSON.parse(localStorage.getItem("names"));
                    //JSON.parse(localStorage.getItem("user")).name

                    Userinfo.setToken(res.data.token);
                    //SessionService.set('token', res.data.token);

                } else if (res.data.success == false) {

                }
                calback(res);
            }).catch(error => {
                //this.setState({alert_message:'error'});
            });
    }
    /**
     * Register with api
     */
    register(user, callback) {
        axios.post(Config.getUrl() + "/register", user)
            .then(res => {
                callback(res);
                //this.setState({alert_message:'success'});
            }).catch(error => {
                //this.setState({alert_message:'error'});
            });
    }
    /**
     * Check if user is authenticated or not
     */
    isLogged() {
        if (SessionService.get('token') != null) {
            this.authenticated = true;
            return true;
        } else {
            this.authenticated = false;
            return false;
        }
    }

    /**
     * Logout user
     */
    logout(callback) {
        const user = {
            token: Userinfo.getToken(),
        }
        axios.post(Config.getUrl() + "/logout", user)
            .then(res => {
                SessionService.removeAll();
                this.authenticated = false;
                callback(res);
            }).catch(error => {
                //this.setState({alert_message:'error'});
            });

    }
}


export default new AuthService();



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