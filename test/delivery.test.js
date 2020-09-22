import { expect } from 'chai';
const BostaClient = require('../lib');
const {
    testApiKey,
    stgBaseUrl,
    deliveryData,
    newCodValue,
} = require('./testFactory');

describe('Delivery', () => {
    
    let bostaClient;
    let deliveryId;
    let trackingNumber;

    before(async () => {
        bostaClient = new BostaClient(
            testApiKey,
            stgBaseUrl
        );
    });

    it('should success and return new created delivery id and tracking number', async () => {
        const createdDelivery = await bostaClient.delivery.createDelivery(
            deliveryData.type,
            deliveryData.specs,
            deliveryData.cod,
            deliveryData.dropOffAddress,
            deliveryData.businessReference,
            deliveryData.receiver,
            deliveryData.notes,
        );

        deliveryId = createdDelivery._id;
        trackingNumber = createdDelivery.trackingNumber;

        expect(createdDelivery).to.have.property('_id');
        expect(createdDelivery).to.have.property('trackingNumber');
    });

    it('should update the created delivery', async () => {
        await bostaClient.delivery.updateDelivery(
            deliveryId,
            {
                cod: newCodValue
            }
        );
        
        const updateDelivery = await bostaClient.delivery.getDeliveryByTrakingNumber(
            trackingNumber
        );
        
        expect(updateDelivery.cod).to.equal(newCodValue);
    });

    it('should terminate the created delivery', async () => {
        await bostaClient.delivery.terminateDelivery(
            deliveryId,
        );
        
        const terminatedDelivery = await bostaClient.delivery.getDeliveryByTrakingNumber(
            trackingNumber
        );

        expect(terminatedDelivery.state.value).to.equal('Terminated');
    });
});
