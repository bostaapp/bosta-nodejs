class DeliveryClient {
    constructor (apiClient) {
        this.apiClient = apiClient;
    }

    async createDelivery(
        type,
        specs,
        cod,
        dropOffAddress,
        businessReference,
        receiver,
        notes,
    ) {
        try {

            const data = {
                type,
                specs,
                cod,
                dropOffAddress,
                businessReference,
                receiver,
                notes: notes ? notes : undefined
            };
    
            const result = await this.apiClient.send('post', 'deliveries', data);
    
            if (result.success = true) {
    
                return result.data || result.message;
            } else {
    
                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error(error);
        }
    }

    async getAllDeliveries() {

        try {

            const result = await this.apiClient.send('get', 'deliveries');

            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error(error);
        }
    }

    async getDeliveryByTrakingNumber(trackingNumber) {

        try {

            const result = await this.apiClient.send('get', `deliveries/${trackingNumber}`);

            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error(error);
        }
    }

    async trackDelivery(trackingNumber) {

        try {

            const result = await this.apiClient.send('get', `deliveries/${trackingNumber}/tracking`);

            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error(error);
        }
    }

    async printDeliveryAWB(deliveryId) {

        try {

            const result = await this.apiClient.send('get', `deliveries/awb/${deliveryId}`);

            if (result.success = true) {
    
                return result.data || result.message;
            } else {
    
                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error(error);
        }
    }

    async updateDelivery(
        deliveryId,
        updatePayload,
    ) {
        try {

            const result = await this.apiClient.send('put', `deliveries/${deliveryId}`, updatePayload);
    
            if (result.success = true) {

                return result.data || result.message;
            } else {

                throw new Error (result.message);
            }
        } catch(error) {

            throw new Error (error);
        }
    }

    async terminateDelivery(deliveryId) {
        try {

            const result = await this.apiClient.send('delete', `deliveries/${deliveryId}`);

            if (result.success = true) {
    
                return result.data || result.message;
            } else {
    
                throw new Error (result.message);
            }
    
        } catch(error) {

            throw new Error(error);
        }
    }
}

module.exports = DeliveryClient;
