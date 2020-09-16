import axios from 'axios';
import PickupClient from './Pickups/index.js';
import DeliveryClient from './deliveries/index.js';

class BostaClient {
    constructor(apiKey, baseUrl) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.pickup = new PickupClient(this);
        this.delivery = new DeliveryClient(this);
    }

    async send(method, path, body) {
        try {
            const result = await axios({
                method: method,
                url: `${this.baseUrl}/${path}`,
                data: body ? body : undefined,
                headers: {
                    'Authorization': this.apiKey,
                    contentType: 'application/json',
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
