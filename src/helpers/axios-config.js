import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://backend-api-nodejs-j339.onrender.com/'
});

export {
    axiosInstance
}