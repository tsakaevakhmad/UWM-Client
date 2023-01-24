import axios from 'axios';

export default class AxiosInstance{
    
    instance = axios.create({
        baseURL: 'http://localhost/api',
        headers: {'Authorization': localStorage.getItem("Authorization")}
    });
}
