import { expect } from 'chai';
const Bosta = require('../lib');
const {
    testApiKey,
    stgBaseUrl,
    pickupData,
    updatedContactPerson,
} = require('./testFactory');

describe('Pickup', () => {
    
    let bosta;
    let pickupId;

    before(async () => {
        bosta = new Bosta(
            testApiKey,
            stgBaseUrl
        );
    });

    it('should success creating the pickup', async () => {
        const createdPickup = await bosta.pickup.createPickup(
            pickupData.businessLocationId,
            pickupData.scheduledDate,
            pickupData.scheduledTimeSlot,
            pickupData.contactPerson
        );

        pickupId = createdPickup.message._id;

        expect(createdPickup.message).to.have.property('_id');
    });

    it('should update the created pickup', async () => {
        await bosta.pickup.updatePickup(
            pickupId,
            {
                contactPerson: updatedContactPerson
            }
        );
        
        const updatedPickup = await bosta.pickup.getPickupById(
              pickupId
        );

        expect(updatedPickup.message.contactPerson.email).to.equal(updatedContactPerson.email);
    });

    it('should delete the created pickup', async () => {
        const deleteResult = await bosta.pickup.deletePickup(
            pickupId,
        );

        expect(deleteResult.message).to.equal('Pickup Request Deleted Successfully');
    });
});
