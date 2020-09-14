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

    static async send(method, path, body) {

        return axios({
            method: method,
            url: `${this.baseUrl}/${path}`,
            data: body ? body : undefined,
            headers: {
                'Authorization': this.apiKey,
                contentType: 'application/json',
            }
        })
    }
}

export default BostaClient;
