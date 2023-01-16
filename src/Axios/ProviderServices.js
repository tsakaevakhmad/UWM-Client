import axios from 'axios';
import { baseUrl } from './Base';

export default class ProviderServices {

  async getProvider() {
    try {
      return (await axios.get(`${baseUrl}/provider`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async getProviderById(id) {
    try {
      return (await axios.get(`${baseUrl}/provider/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async deleteProvider(id) {
    try {
      return (await axios.delete(`${baseUrl}/provider/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async createProvider(provider) {
    try {
      await axios.post(`${baseUrl}/provider`, {
        name: provider.name
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  async updateProvider(id, provider) {
    try {
      await axios.put(`${baseUrl}/provider/${id}`, {
        id: provider.id,
        name: provider.name
      })
    }
    catch (error) {
      console.error(error)
    }
  }
}