import axios from 'axios';

export default class AxiosInstance {

    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost/api',
            headers: { 'Authorization': localStorage.getItem("Authorization") }
        });

        this.instance.interceptors.request.use(
            request => {

                return request;
            },
            error => {

                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            response => {

                if(response.status === 401)
                    window.location.href = '/Authorization';
                return response;
            },
            error => {
                if(error.response.status === 401)
                    window.location.href = '/Authorization';
                return Promise.reject(error);
            }
        );
    }
}
