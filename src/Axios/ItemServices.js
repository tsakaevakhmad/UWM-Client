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
      try {
        return (await axios.delete(`${baseUrl}/item/${id}`)).data;
      } 
      catch (error) {
        console.error(error)
      }
    }

    async createItem(item) {
        try {
          await axios.post(`${baseUrl}/item`, { 
            title: item.title,
            specifications: item.specifications,
            manufacturer: item.manufacturer,
            quantity: item.quantity,
            price: item.price,
            unit: item.unit,
            providerId: item.providerId,
            warehouseId: item.warehouseId,
            subCategoryId: item.subCategoryId,

        })
        } 
        catch (error) {
          console.error(error)
        }
    }

    async updateCategory(id, item) {
        try {
          await axios.put(`${baseUrl}/item/${id}`, { 
            id: item.id,
            title: item.title,
            specifications: item.specifications,
            manufacturer: item.manufacturer,
            quantity: item.quantity,
            price: item.price,
            unit: item.unit,
            providerId: item.providerId,
            warehouseId: item.warehouseId,
            subCategoryId: item.subCategoryId,
        })
        } 
        catch (error) {
          console.error(error)
        }
    }
}