import { expect } from 'chai';
const BostaClient = require('../lib');
const {
    testApiKey,
    stgBaseUrl,
    pickupData,
    updatedContactPerson,
} = require('./testFactory');

describe('Pickup', () => {
    
    let bostaClient;
    let pickupId;

    before(async () => {
        bostaClient = new BostaClient(
            testApiKey,
            stgBaseUrl
        );
    });

    it('should success creating the pickup', async () => {
        const createdPickup = await bostaClient.pickup.createPickup(
            pickupData.businessLocationId,
            pickupData.scheduledDate,
            pickupData.scheduledTimeSlot,
            pickupData.contactPerson
        );

        pickupId = createdPickup.message._id;

        expect(createdPickup.message).to.have.property('_id');
    });

    it('should update the created pickup', async () => {
        await bostaClient.pickup.updatePickup(
            pickupId,
            {
                contactPerson: updatedContactPerson
            }
        );
        
        const updatedPickup = await bostaClient.pickup.getPickupById(
              pickupId
        );

        expect(updatedPickup.message.contactPerson.email).to.equal(updatedContactPerson.email);
    });

    it('should delete the created pickup', async () => {
        const deleteResult = await bostaClient.pickup.deletePickup(
            pickupId,
        );

        expect(deleteResult.message).to.equal('Pickup Request Deleted Successfully');
    });
});
