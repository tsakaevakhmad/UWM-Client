import AxiosInstance from './AxiosInstance';

export default class ItemServices {

  axios = new AxiosInstance();

  async getItemByCategory(categoryId) {
    try {
      return (await this.axios.instance.get(`/item/getbysubcategory/${categoryId}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async getItem(id) {
    try {
      return (await this.axios.instance.get(`/item/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async deleteItem(id) {
    try {
      return (await this.axios.instance.delete(`/item/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async createItem(item) {
    try {
      return await this.axios.instance.post(`/item`, item)
    }
    catch (error) {
      console.error(error)
    }
  }

  async updateItem(id, item) {
    try {
      await this.axios.instance.put(`/item/${id}`, item)
    }
    catch (error) {
      console.error(error)
    }
  }
}