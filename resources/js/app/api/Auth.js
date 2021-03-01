import Userinfo from '../classes/Userinfo';
import SessionService from '../services/SessionService';
import AuthService from './../services/AuthService';

const Auth = {
    /**
     * Register user
     * @param {*} data 
     * @param {*} success 
     * @param {*} fail 
     */
    register: (data, success, fail) => {
        AuthService.register(data, success, fail);
    },
    /**
     * Login user
     * @param {*} data 
     */
    login: (data) => {
        AuthService.login(data, (res) => {
            
            if (res.data.success == true) {
                // Set sesiion
                for (var i in res.data.user) {
                    SessionService.set("user." + i, res.data.user[i]);
                }

            } else {
                SessionService.removeAll();
            }

        }, (error) => {

        });


    },
    /**
     * Logout user
     */
    logout: () => {
        AuthService.logout((res) => {
            SessionService.removeAll();
        }, (error) => {

        });
    },
    /**
     * Check if user logged
     */
    isLogged: () => {
        return AuthService.isLogged();
    }
}

export default Auth;