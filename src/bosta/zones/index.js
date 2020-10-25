class Zone {
    constructor (apiClient) {
        this.apiClient = apiClient;
    }

    async getCityZones(cityId) {
        try {

            const result = await this.apiClient.send('get', `zones?cityId=${cityId}`);

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

export default Zone;
