class Pickup {
    constructor (apiClient) {
        this.apiClient = apiClient;
    }

    async getBusinessPickupLocations() {
        try {

            const result = await this.apiClient.send('get', 'pickup-locations');

            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error (error);
        }
    }

    async createPickup(
        businessLocationId,
        scheduledDate,
        scheduledTimeSlot,
        contactPerson,
        notes,
    ) {
        try {

            const data = {
                businessLocationId,
                scheduledDate,
                scheduledTimeSlot,
                contactPerson,
                notes: notes ? notes : undefined,
            };
    
            const result = await this.apiClient.send('post', 'pickups', data);
    
            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error (error);
        }
    }

    async getAllPickups() {

        try {

            const result = await this.apiClient.send('get', 'pickups');

            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error (error);
        }
    }

    async getPickupById(pickupId) {

        try {

            const result = await this.apiClient.send('get', `pickups/${pickupId}`);

            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error (error);
        }
    }

    async updatePickup(
        pickupId,
        updatePayload,
    ) {
        try {

            const result = await this.apiClient.send('put', `pickups/${pickupId}`, updatePayload);
    
            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error (error);
        }
    }

    async deletePickup(pickupId) {
        try {

            const result = await this.apiClient.send('delete', `pickups/${pickupId}`);

            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error (error);
        }
    }
}

export default Pickup;
