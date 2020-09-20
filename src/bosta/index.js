import axios from 'axios';
import PickupClient from './Pickups/index.js';
import DeliveryClient from './deliveries/index.js';
import City from './cities';
import Zone from './zones';
import {
    deliveryStates,
    deliveryTypes,
    pickupStates,
    pickupTimeSlots
} from '../utils';

class BostaClient {
    constructor(apiKey, baseUrl) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.deliveryStates = deliveryStates;
        this.deliveryTypes = deliveryTypes;
        this.pickupStates = pickupStates;
        this.pickupTimeSlots = pickupTimeSlots;
        this.pickup = new PickupClient(this);
        this.delivery = new DeliveryClient(this);
        this.city = new City(this);
        this.zone = new Zone(this);
    }

    async send(method, path, body) {
        try {
            const result = await axios({
                method: method,
                url: `${this.baseUrl}/${path}`,
                data: body ? body : undefined,
                headers: {
                    'Authorization': this.apiKey,
                    'contentType': 'application/json',
                    'X-Requested-By': 'NODEJS-SDK'
                },
                timeout: 30000
            });

            return result;
        } catch (error) {
            throw new Error (error.response.data.message);
        }
    }
}

module.exports = BostaClient;
