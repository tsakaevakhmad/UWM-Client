import AxiosInstance from './AxiosInstance';

export default class AdminServices {

    axios = new AxiosInstance();

    async getRoles() {
        try {
            return (await this.axios.instance.get(`/admin/roles`)).data
        }
        catch (error) {
            console.error(error.status)
        }
    }

    async getUsers() {
        try {
            return (await this.axios.instance.get(`/admin/users`)).data
        }
        catch (error) {
            console.error(error)
            throw error 
        }
    }

    async getUser(id) {
        try {
            return (await this.axios.instance.get(`/admin/user/${id}`)).data
        }
        catch (error) {
            console.error(error)
        }
    }

    async addRole(data) {
        try {
            return (await this.axios.instance.post(`/admin/role`, data)).data
        }
        catch (error) {
            console.error(error)
        }
    }

    async addRoleToUser(data) {
        try {
            return (await this.axios.instance.post(`/admin/userrole`, data)).data
        }
        catch (error) {
            console.error(error)
        }
    }

    async deleteRole(id) {
        try {
            return (await this.axios.instance.delete(`/admin/role/${id}`)).data
        }
        catch (error) {
            console.error(error)
        }        
    }

    async deleteUser(id) {
        try {
            return (await this.axios.instance.delete(`/admin/user/${id}`)).data
        }
        catch (error) {
            console.error(error)
        }        
    }
    
    async deleteRoleFromUser(data) {
        try {
            return (await this.axios.instance.delete(`/admin/userrole`, data)).data
        }
        catch (error) {
            console.error(error)
        }        
    }
}