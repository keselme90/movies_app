import axios from 'axios'

const BASE_URL = 'http://www.omdbapi.com'

const CONFIG = {headers: {'content-type': 'application/x-www-form-urlencoded'}}

const REQUEST_TIMEOUT = 5000

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: CONFIG.headers,
    params:{
        i: 'tt3896198',
        apikey: '236f7240'
    } 
})

export default axiosInstance;