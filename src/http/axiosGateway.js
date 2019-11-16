import axios from 'axios';

const axiosGateway = axios.create({
    baseURL: 'http://lisagateway-103.localy/api'
});

export default axiosGateway;