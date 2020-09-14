class DeliveryClient {
    constructor (apiClient) {
        this.apiClient = apiClient;
    }

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

        const result = await this.apiClient.send('post', '/deliveries', data);

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }

    async getAllDeliveries() {

        const result = await this.apiClient.send('get', '/deliveries');

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }

    async getDeliveryByTrakingNumber(trackingNumber) {

        const result = await this.apiClient.send('get', `/deliveries/${trackingNumber}`);

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }

    async trackDelivery(trackingNumber) {

        const result = await this.apiClient.send('get', `/deliveries/${trackingNumber}/tracking`);

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }

    async printDeliveryAWB(deliveryId) {

        const result = await this.apiClient.send('get', `/deliveries/awb/${deliveryId}`);

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }

    async terminateDelivery(deliveryId) {

        const result = await this.apiClient.send('delete', `/deliveries/awb/${deliveryId}`);

        if (result.success = true) {

            return result.data || result.message;
        } else {

            throw new Error (result.message);
        }
    }
}

export default new DeliveryClient();