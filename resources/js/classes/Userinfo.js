import SessionService from "../services/SessionService"

/**
 * Access user information
 */
class Userinfo{
    /**
     * Get user id
     */
    getId(){
        let data = SessionService.get('id');
        return data;
    }
    /**
     * Get User name
     */
    getName(){
        let data = SessionService.get('name');
        return data;
    }
    /**
     * Get User token
     */
    getToken(){
        let data = SessionService.get('token');
        return data;
    }
    /**
     * Set User token
     */
    setToken(data){
        SessionService.set('token', data);
    }
}

export default new Userinfo();