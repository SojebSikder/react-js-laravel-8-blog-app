/**
 * It is used for Session Management
 */
class SessionService{

    /**
     * Set session value
     * @param {*} key 
     * @param {*} value 
     */
    set(key, value){
        sessionStorage.setItem(key, value);
    }

    /**
     * Get session value
     * @param {*} key 
     */
    get(key){
      let data = sessionStorage.getItem(key);
      return data;
    }

    /**
     * Remove session value
     * @param {*} key 
     */
    remove(key){
        sessionStorage.removeItem(key);
    }

    /**
     * Remove all session value
     */
    removeAll(){
        sessionStorage.clear();
    }
}

export default new SessionService();