import AxiosInstance from './AxiosInstance';

export default class CategoryServices {

  axios = new AxiosInstance();

  async getCategory() {
    try {
      return (await this.axios.instance.get('/category')).data
    }
    catch (error) {
      console.error(error)
    }
  }

  async getCategoryByid(id) {
    try {
      return (await this.axios.instance.get(`/category/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async deleteCategory(id) {
    try {
      return (await this.axios.instance.delete(`/category/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async createCategory(category) {
    try {
      return await this.axios.instance.post(`/category`, {
        name: category.name
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  async updateCategory(id, category) {
    try {
      await this.axios.instance.put(`/category/${id}`, {
        id: category.id,
        name: category.name
      })
    }
    catch (error) {
      console.error(error)
    }
  }
}