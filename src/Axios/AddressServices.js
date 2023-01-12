import axios from 'axios';
import { baseUrl } from './Base';

export default class AddressServices {

    async updateAddress(id, address) {
        try {
            await axios.put(`${baseUrl}/address/${id}`, {
                id: address.id,
                country: address.country,
                city: address.city,
                building: address.building,
                warehouseId: address.warehouseId
            })
        }
        catch (error) {
            console.error(error)
        }
    }
}