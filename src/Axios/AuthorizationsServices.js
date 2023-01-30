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
            window.location.href = '/authorization/login';
        }
        catch (error) {
            console.error(error)
        }
    }
}