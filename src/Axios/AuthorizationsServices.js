import AxiosInstance from './AxiosInstance';

export default class AuthorizationsServices {

    axios = new AxiosInstance();

    async Register(register) {
        try {
            return await this.axios.instance.post(`/Authorization/Register`, register)
        }
        catch (error) {
            console.error(error.status)
        }
    }

    async login(login) {
        try {
            const token = await this.axios.instance.post(`/Authorization/Login`, login)
            await localStorage.setItem("Authorization", `Bearer ${token.data.token}`)
            return token
        }
        catch (error) {
            console.error(error)
        }
    }

    async logout() {
        try {
            await localStorage.removeItem("Authorization")
            window.location.href = '/Authorization';
        }
        catch (error) {
            console.error(error)
        }
    }
}