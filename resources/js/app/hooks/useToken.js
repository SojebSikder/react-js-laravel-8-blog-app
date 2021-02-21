import { useState } from 'react';
import Userinfo from '../classes/Userinfo';

export default function useToken() {
    const getToken = Userinfo.getToken();
    const [token, setToken] = useState(getToken);

    const saveToken = (userToken) =>
    {
        Userinfo.setToken();
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}
