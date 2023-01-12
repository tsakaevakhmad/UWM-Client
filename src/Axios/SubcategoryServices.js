import axios from 'axios';
import { baseUrl } from './Base';

export default class SubCategoryServices {

    async getSubCategory() {
        try {
          return (await axios.get(`${baseUrl}/SubCategory`)).data;
        } 
        catch (error) {
          console.error(error)
        }
      }

    async deleteSubCategory(id) {
      try {
        return (await axios.delete(`${baseUrl}/SubCategory/${id}`)).data;
      } 
      catch (error) {
        console.error(error)
      }
    }

    async createSubCategory(subcategory) {
        try {
          await axios.post(`${baseUrl}/SubCategory`, { 
            name: subcategory.name 
        })
        } 
        catch (error) {
          console.error(error)
        }
    }

    async updateSubCategory(id, subcategory) {
        try {
          await axios.put(`${baseUrl}/SubCategory/${id}`, { 
            id: subcategory.id,
            name: subcategory.name 
        })
        } 
        catch (error) {
          console.error(error)
        }
    }
}