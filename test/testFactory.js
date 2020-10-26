const testApiKey = 'a61c617b007f82b2fdd32c86903148f2fbbdf567ce488e577ec5500679c09ccd';
const stgBaseUrl = 'https://stg-app.bosta.co';

const deliveryData = {
    type: 10,
    specs: {
        "size": "SMALL",
        "packageDetails": {
            "itemsCount": 5,
            "document": "Document",
            "description": "Desc."
        }
    },
    cod: 500,
    dropOffAddress: {
        "city": "EG-01",
        "zone": "Maadi & Muqattam",
        "district": "Maadi",
        "firstLine": "Maadi",
        "secondLine": "Nasr  City",
        "buildingNumber": "123",
        "floor": "4",
        "apartment": "2"
    },
    businessReference: "43535252",
    receiver: {
        "firstName": "Sasuke",
        "lastName": "Uchiha",
        "phone": "01065685435",
        "email": "ahmed@ahmed.com"
    },
    notes: "Welcome Note",
};

const newCodValue = 900;

const pickupData = {
    businessLocationId: "0as340p505",
    scheduledDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    scheduledTimeSlot: "10:00 to 13:00",
    contactPerson: { name: "Ahmed", phone: "01271700015", email: "ahmed@ahmed.com" }
};

const updatedContactPerson = { name: "Ahmed", phone: "01271700015", email: "ahmedXOXO@ahmed.com" };

module.exports = {
    testApiKey,
    stgBaseUrl,
    deliveryData,
    newCodValue,
    pickupData,
    updatedContactPerson,
};
