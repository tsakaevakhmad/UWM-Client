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
            const token = (await this.axios.instance.post(`/Authorization/Login`, login)).data.token
            console.log(token)
            localStorage.setItem("Authorization", `Bearer ${token}`)
            return true
        }
        catch (error) {
            console.error(error)
            return false
        }
    }
}