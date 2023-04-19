import AxiosInstance from './AxiosInstance';

export default class UserServices {

    axios = new AxiosInstance();

    async getUserInfo() {
        try {
            const userInfo = await this.axios.instance.get(`/user/userinfo`)
            await localStorage.setItem("UserInfo", JSON.stringify(userInfo.data))
            console.log(userInfo.data)
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }
}