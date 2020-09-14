class PickupClient {
    constructor (apiClient) {
        this.apiClient = apiClient;
    }

    async getBusinessPickupLocations() {
        const result = await this.apiClient.send('get', '/pickup-locations');

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
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

        const result = await this.apiClient.send('post', '/pickups', data);

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }

    async getAllPickups() {

        const result = await this.apiClient.send('get', '/pickups');

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }

    async getPickupById(pickupId) {

        const result = await this.apiClient.send('get', `/pickups/${pickupId}`, data);

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }

    async deletePickup(pickupId) {
        const result = await this.apiClient.send('delete', `/pickups/${pickupId}`, data);

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }
}

export default new PickupClient();