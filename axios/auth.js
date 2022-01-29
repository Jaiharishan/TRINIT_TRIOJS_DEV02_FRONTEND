import axios from 'axios';

const axios_auth = axios.create({
    baseURL: 'http://localhost:4000/auth/user/',
})

export default axios_auth