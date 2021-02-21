import React from 'react'
import { Redirect } from "react-router-dom";

/**
 * This contains some usefull function for url
 */
class UrlHelper {
    /**
     * 
     * @param {*} props props
     * @param {*} url url
     */
    redirectTo(props, url){
        //return <Redirect to={url} />;

        props.history.push(url);
    }
}

export default new UrlHelper();
