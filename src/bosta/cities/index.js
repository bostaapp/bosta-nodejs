class City {
    constructor (apiClient) {
        this.apiClient = apiClient;
    }

    async getAllCities() {
        try {

            const result = await this.apiClient.send('get', 'cities');

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

module.exports = City;
