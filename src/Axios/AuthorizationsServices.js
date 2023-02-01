import AxiosInstance from './AxiosInstance';

export default class AuthorizationsServices {

    axios = new AxiosInstance();

    async Register(register) {
        try {
            return await this.axios.instance.post(`/authorization/register`, register)
        }
        catch (error) {
            console.error(error.status)
        }
    }

    async login(login) {
        try {
            const token = await this.axios.instance.post(`/authorization/login`, login)
            await localStorage.setItem("Authorization", `Bearer ${token.data.token}`)
            await localStorage.setItem("UserInfo", JSON.stringify(token.data.userInfo))
            return token
        }
        catch (error) {
            console.error(error)
            return error
        }
    }

    async logout() {
        try {
            await localStorage.removeItem("Authorization")
            await localStorage.removeItem("UserInfo")
            window.location.href = '/authorization/login';
        }
        catch (error) {
            console.error(error)
        }
    }

    async forgotPassword(data) {
        try {
            return await this.axios.instance.post(`/authorization/forgotPassword`, data)
        }
        catch (error) {
            console.error(error.status)
        }
    }

    async resetPassword(password) {
        try {
            return await this.axios.instance.post(`/authorization/resetPassword`, password)
        }
        catch (error) {
            console.error(error.status)
        }
    }

    async confirmAccaunt(confirmModel) {
        try {
            return await this.axios.instance.post(`/authorization`, confirmModel)
        }
        catch (error) {
            console.error(error.status)
        }        
    }
}