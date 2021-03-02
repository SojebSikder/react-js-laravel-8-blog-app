import axios from "axios";

const Category = {
    list: (page = 1) => {
        return axios.get('/categories?page=' + page);
    },
    add: (title) => {
        const data = {
            title: title,
            token: localStorage.getItem("user.api_token"),
        }
        //return axios.post('/categories', { title }, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user.api_token") } });
        return axios.post('/categories', data);
    },
    showOne: (id) => {
        return axios.get('/categories/' + id);
    },
    edit: (title, id) => {
        return axios.put('/categories/' + id, { title }, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user.api_token") } });
    },
    remove: (id) => {
        return axios.delete('/categories/' + id, { headers: { Authorization: 'Bearer ' + localStorage.getItem("user.api_token") } });
    },
    listAll: () => {          // used to populate dropdowns
        return axios.get('/categories?all=1');
    }
};

export default Category;