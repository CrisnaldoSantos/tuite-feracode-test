import axios from 'axios';

const api = axios.create({
    baseURL:"https://tuite-feracode-api.herokuapp.com"
});

export default api;
