import Userinfo from '../classes/Userinfo';
import SessionService from '../services/SessionService';
import AuthService from './../services/AuthService';

const Auth = {
    register: (data, success, fail) => {
        AuthService.register(data, success, fail);
    },
    login: (data) => {
        AuthService.login(data, (res) => {
            if (res.data.success == true) {
                // Set sesiion
                //SessionService.set('id', res.data.user.id);
                //SessionService.set('name', res.data.user.name);
                // whole user data
                //SessionService.set('user', JSON.stringify(res.data.user));
                for (var i in res.data.user) {
                    localStorage.setItem("user." + i, res.data.user[i]);
                }

                //...
                //var storedNames = JSON.parse(localStorage.getItem("names"));
                //JSON.parse(localStorage.getItem("user")).name

                //Userinfo.setToken(res.data.token);
                //SessionService.set('token', res.data.token);

            } else{
                localStorage.clear();
            }

        }, (error) => {

        });


    },
    logout: () => {
        AuthService.logout((res) => {
            SessionService.removeAll();
        }, (error) => {

        });
    },
    isLogged: () => {
        return AuthService.isLogged();
    }
}

export default Auth;