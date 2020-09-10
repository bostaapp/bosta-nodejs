const axios = require('axios');
const config = require('./config.json');
const API_KEY = config.BOSTA_API_KEY;
const BASE_URL = config.BOSTA_API_BASE;

class Delivery {

    async createDelivery(
        type,
        specs,
        notes,
        cod,
        dropOffAddress,
        businessReference,
        receiver,
    ) {
        const data = {
            type,
            specs,
            notes,
            cod,
            dropOffAddress,
            businessReference,
            receiver,
        };
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'POST',
            url: `${BASE_URL}/deliveries/`,
            headers,
            data,
        });
    }

    async getAllDeliveries() {
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'GET',
            url: `${BASE_URL}/deliveries/`,
            headers,
        });
    }

    async getDeliveryByTrakingNumber(trackingNumber) {
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'GET',
            url: `${BASE_URL}/deliveries/${trackingNumber}`,
            headers,
        });
    }

    async trackDelivery(trackingNumber) {
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'GET',
            url: `${BASE_URL}/deliveries/${trackingNumber}/tracking`,
            headers,
        });
    }

    async printDeliveryAWB(deliveryId) {
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'GET',
            url: `${BASE_URL}/deliveries/awb/${deliveryId}`,
            headers,
        });
    }

    async terminateDelivery(deliveryId) {
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'DELETE',
            url: `${BASE_URL}/deliveries/${deliveryId}`,
            headers,
        });
    }
}

export default new Delivery();