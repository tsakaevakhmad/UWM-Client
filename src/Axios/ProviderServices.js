import AxiosInstance from './AxiosInstance';

export default class ProviderServices {

  axios = new AxiosInstance();

  async getProvider() {
    try {
      return (await this.axios.instance.get(`/provider`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async getProviderById(id) {
    try {
      return (await this.axios.instance.get(`/provider/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async deleteProvider(id) {
    try {
      return (await this.axios.instance.delete(`/provider/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async createProvider(provider) {
    try {
      return await this.axios.instance.post(`/provider`, {
        name: provider.name
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  async updateProvider(id, provider) {
    try {
      await this.axios.instance.put(`/provider/${id}`, {
        id: provider.id,
        name: provider.name
      })
    }
    catch (error) {
      console.error(error)
    }
  }
}