import { expect } from 'chai';
const Bosta = require('../lib');
const {
    testApiKey,
    stgBaseUrl,
    deliveryData,
    newCodValue,
} = require('./testFactory');

describe('Delivery', () => {
    
    let bosta;
    let deliveryId;
    let trackingNumber;

    before(async () => {
        bosta = new Bosta(
            testApiKey,
            stgBaseUrl
        );
    });

    it('should success and return new created delivery id and tracking number', async () => {
        const createdDelivery = await bosta.delivery.createDelivery(
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
        await bosta.delivery.updateDelivery(
            deliveryId,
            {
                cod: newCodValue
            }
        );
        
        const updatedDelivery = await bosta.delivery.getDeliveryByTrakingNumber(
            trackingNumber
        );

        expect(updatedDelivery.cod).to.equal(newCodValue);
    });

    it('should terminate the created delivery', async () => {
        await bosta.delivery.terminateDelivery(
            deliveryId,
        );
        
        const terminatedDelivery = await bosta.delivery.getDeliveryByTrakingNumber(
            trackingNumber
        );

        expect(terminatedDelivery.state.value).to.equal('Terminated');
    });
});
