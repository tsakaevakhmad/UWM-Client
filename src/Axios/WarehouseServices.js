import axios from 'axios';
import { baseUrl } from './Base';

export default class WarehouseServices {

    async getWarehouse() {
        try {
            return (await axios.get(`${baseUrl}/Warehouse`)).data;
        }
        catch (error) {
            console.error(error)
        }
    }

    async deleteWarehouse(id) {
        try {
            return (await axios.delete(`${baseUrl}/Warehouse/${id}`)).data;
        }
        catch (error) {
            console.error(error)
        }
    }

    async createWarehouse(warehouse) {
        try {
            await axios.post(`${baseUrl}/Warehouse`, {
                number: warehouse.number,
                addressDto: {
                    country: warehouse.addressDto.country,
                    city: warehouse.addressDto.city,
                    building: warehouse.addressDto.building,
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    async updateWarehouse(id, warehouse) {
        try {
            await axios.put(`${baseUrl}/Warehouse/${id}`, {
                id: warehouse.id,
                number: warehouse.number,
                addressDto: {
                    id: warehouse.addressDto.id,
                    country: warehouse.addressDto.country,
                    city: warehouse.addressDto.city,
                    building: warehouse.addressDto.building,
                    warehouseId: warehouse.addressDto.warehouseId
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    }
}