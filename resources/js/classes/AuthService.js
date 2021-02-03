import Config from "./Config";

class AuthService {
    constructor(){
        this.authenticated = false;
    }
    /**
     * Login with api
     */
    login(user, calback){

        axios.post(Config.getUrl()+"/user/login", user)
        .then(res=>{
            if(res.data.status == 0)
            {
                this.authenticated = true;
                //this.setState({alert_message:'error'});
            }else if(res.data.status == 1){
                //this.setState({alert_message:'success'});
            }
            calback(res);
            
        }).catch(error=>{
            this.setState({alert_message:'error'});
        });

        
        
    }
    /**
     * Register with api
     */
    register(user, callback){
        axios.post(Config.getUrl()+"/user/register", user)
        .then(res=>{
            callback(res);
            //this.setState({alert_message:'success'});
        }).catch(error=>{
            this.setState({alert_message:'error'});
        });
    }
    /**
     * Check if user is authenticated or not
     */
    isAuthenticated(){
        return this.authenticated;
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