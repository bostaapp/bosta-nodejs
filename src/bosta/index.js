import axios from 'axios';
import Pickup from './pickups/index.js';
import Delivery from './deliveries/index.js';
import City from './cities';
import Zone from './zones';
import {
    deliveryStates,
    deliveryTypes,
    pickupStates,
    pickupTimeSlots
} from '../utils';

class Bosta {
    constructor(apiKey, baseUrl) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl ? baseUrl : 'https://app.bosta.co';
        this.deliveryStates = deliveryStates;
        this.deliveryTypes = deliveryTypes;
        this.pickupStates = pickupStates;
        this.pickupTimeSlots = pickupTimeSlots;
        this.pickup = new Pickup(this);
        this.delivery = new Delivery(this);
        this.city = new City(this);
        this.zone = new Zone(this);
    }

    async send(method, path, body) {
        try {
            const result = await axios({
                method: method,
                url: `${this.baseUrl}/api/v0/${path}`,
                data: body ? body : undefined,
                headers: {
                    'Authorization': this.apiKey,
                    'contentType': 'application/json',
                    'X-Requested-By': 'nodejs-sdk'
                },
                timeout: 30000
            });

            return result;
        } catch (error) {
            throw new Error (error.response.data.message);
        }
    }
}

export default Bosta;
