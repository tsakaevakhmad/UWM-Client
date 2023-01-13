import axios from 'axios';
import { baseUrl } from './Base';

export default class ItemServices {

    async getItemByCategory(categoryId) {
        try {
          return (await axios.get(`${baseUrl}/item/getbysubcategory/${categoryId}`)).data;
        } 
        catch (error) {
          console.error(error)
        }
    }

    async getItem(id) {
      try {
        return (await axios.get(`${baseUrl}/item/${id}`)).data;
      } 
      catch (error) {
        console.error(error)
      }
  }

    async deleteItem(id) {
      console.log("+")
      try {
        return (await axios.delete(`${baseUrl}/item/${id}`)).data;
      } 
      catch (error) {
        console.error(error)
      }
    }

    async createItem(item) {
        console.log(item);
      try {
          await axios.post(`${baseUrl}/item`, item)
        } 
        catch (error) {
          console.error(error)
        }
    }

    async updateItem(id, item) {
        try {
          await axios.put(`${baseUrl}/item/${id}`, item)
        } 
        catch (error) {
          console.error(error)
        }
    }
}