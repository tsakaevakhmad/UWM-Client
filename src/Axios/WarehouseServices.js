import AxiosInstance from './AxiosInstance';

export default class WarehouseServices {

    axios = new AxiosInstance();

    async getWarehouse() {
        try {
            return (await this.axios.instance.get(`/Warehouse`)).data;
        }
        catch (error) {
            console.error(error)
        }
    }

    async getWarehouseById(id) {
        try {
            return (await this.axios.instance.get(`/Warehouse/${id}`)).data;
        }
        catch (error) {
            console.error(error)
        }
    }

    async deleteWarehouse(id) {
        try {
            return (await this.axios.instance.delete(`/Warehouse/${id}`)).data;
        }
        catch (error) {
            console.error(error)
        }
    }

    async createWarehouse(warehouse) {
        try {
            return await this.axios.instance.post(`/Warehouse`, {
                number: warehouse.number,
                addressDto: {
                    country: warehouse.country,
                    city: warehouse.city,
                    building: warehouse.building,
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    async updateWarehouse(id, warehouse) {
        try {
            await this.axios.instance.put(`/Warehouse/${id}`, {
                id: warehouse.id,
                number: warehouse.number,
                addressDto: {
                    id: warehouse.addressId,
                    country: warehouse.country,
                    city: warehouse.city,
                    building: warehouse.building,
                    warehouseId: warehouse.id
                }
            })
        }
        catch (error) {
            console.error(error)
        }
    }
}