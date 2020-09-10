const axios = require('axios');
const config = require('./config.json');
const API_KEY = config.BOSTA_API_KEY;
const BASE_URL = config.BOSTA_API_BASE;

class Pickup {
    
    async getBusinessPickupLocations() {
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'GET',
            url: `${BASE_URL}/pickup-locations/`,
            headers,
            data,
        });
    }

    async createPickup(
        businessLocationId,
        notes,
        scheduledDate,
        scheduledTimeSlot,
        contactPerson,
    ) {
        const data = {
            businessLocationId,
            notes,
            scheduledDate,
            scheduledTimeSlot,
            contactPerson,
        };
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'POST',
            url: `${BASE_URL}/pickups/`,
            headers,
            data,
        });
    }

    async getAllPickups() {
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'GET',
            url: `${BASE_URL}/pickups/`,
            headers,
        });
    }

    async getPickupById(pickupId) {
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'GET',
            url: `${BASE_URL}/pickups/${pickupId}`,
            headers,
        });
    }

    async deletePickup(pickupId) {
        const headers = {
            Authorization: API_KEY,
            contentType: 'application/json',
        };

        return axios({
            method: 'DELETE',
            url: `${BASE_URL}/pickups/${pickupId}`,
            headers,
        });
    }
}

export default new Pickup();