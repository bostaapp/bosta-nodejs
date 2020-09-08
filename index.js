const {
    createDelivery,
    getBusinessDeliveries,
    getDeliveriesSummary,
    getAirwayBills,
    getDeliveyByTrackingNumber,
} = require('./bosta/delivery');

const {
    createNewPickupRequest,
    getBusinessPickupRequests,
    getPickupRequestById,
} = require('./bosta/pickupRequest');

module.exports = {
    createDelivery,
    getBusinessDeliveries,
    getDeliveriesSummary,
    getAirwayBills,
    getDeliveyByTrackingNumber,
    createNewPickupRequest,
    getBusinessPickupRequests,
    getPickupRequestById,
};