import AxiosInstance from './AxiosInstance';

export default class SubCategoryServices {

  axios = new AxiosInstance();

  async getSubCategory() {
    try {
      return (await this.axios.instance.get(`/SubCategory`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async getSubCategoryById(id) {
    try {
      return (await this.axios.instance.get(`/SubCategory/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async deleteSubCategory(id) {

    try {
      return (await this.axios.instance.delete(`/SubCategory/${id}`)).data;
    }
    catch (error) {
      console.error(error)
    }
  }

  async createSubCategory(subcategory) {
    try {
      return await this.axios.instance.post(`/SubCategory`, {
        name: subcategory.name,
        categoryId: subcategory.categoryId
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  async updateSubCategory(id, subcategory) {
    try {
      await this.axios.instance.put(`/SubCategory/${id}`, subcategory)
    }
    catch (error) {
      console.error(error)
    }
  }
}