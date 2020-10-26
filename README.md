## Bosta Nodejs Package
The Bosta NodeJs SDK provides convenient access to the Bosta API from applications written in the JavaScript language.

## Installation

```bash
npm install --save bosta
```

## Usage

#### Init Bosta Client
```bash
const Bosta = require('bosta');

const bosta = new Bosta(
    process.env.API_KEY,
    process.env.BASE_URL
);
```

API_KEY is your integartion api key with bosta, to get an api key you must be registered, here is the registration link [Bosta](https://business.bosta.co/signup). And BASE_URL is the url to bosta Apis wheither it's [staging](https://stg-app.bosta.co) or [production](https://app.bosta.co). If BASE_URL is not sent in initialization as parameter it's [production](https://app.bosta.co) by default.

#### Use initiated bosta client to do the functionality of the following

##### list utilities
###### delivery state
```bash
const deliveryStates = bosta.deliveryStates;
```
###### delivery types to use in shipment creation
```bash
const deliveryTypes = bosta.deliveryTypes;
```
###### pickup states
```bash
const pickupStates = bosta.pickupStates;
```
###### pickup timeslots to use in pickup creation
```bash
const pickupTimeSlots = bosta.pickupTimeSlots;
```

##### Shipments
###### created shipment
```bash
const createdDelivery = await bosta.delivery.createDelivery(
    type,
    specs,
    cod,
    dropOffAddress,
    businessReference,
    receiver,
    notes,
);

const deliveryId = createdDelivery._id;
const trackingNumber = createdDelivery.trackingNumber;
```
###### update shipment by id
```bash
const updatedDeliver = await bosta.deliver.updateDelivery(
    deliveryId,
    updatePayload
);
```
###### list all created shipments
```bash
const deliveries = await bosta.delivery.getAllDeliveries();
```
###### get shipment by tracking number
```bash
const delivery = await bosta.delivery.getDeliveryByTrakingNumber(trackingNumber);
```
###### track shipment
```bash
const trackingHistory = await bosta.delivery.trackDelivery(trackingNumber);
```
###### print airwayBill
```bash
const airwayBill = await bosta.delivery.printDeliveryAWB(deliveryId);
```
###### terminate delivery
```bash
await bosta.delivery.terminateDelivery(deliveryId);
```

##### pickups
###### get your pickup location
```bash
const pickupLocations = await bosta.pickup.getBusinessPickupLocations();
const businessLocationId = pickupLocations[0]._id;
```
###### create pickup
```bash
const createdPickup = await bosta.pickup.createPickup(
    businessLocationId,
    scheduledDate,
    scheduledTimeSlot,
    contactPerson
);

pickupId = createdPickup.message._id;
```
###### update pickup
```bash
const updatedPickup = await bosta.pickup.updatePickup(
    pickupId,
    updatePayload
);
```
###### get all pickups
```bash
const pickupRequests = await bosta.pickup.getAllPickups();
```
###### get pickup by id
```bash
const pikcupRequest = await bosta.pickup.getPickupById(pickupId);
```
###### delete pickup
```bash
await bosta.pickup.deletePickup(pickupId);
```

##### cities
###### get all cities to select one of them and its code in shipment
```bash
const cities = await bosta.city.getAllCities();
const cityId = cities.find(city => city.name === 'Gharbia')._id;
```

##### zones
###### get zones of the city by city id to use one of them in the shipment
```bash
const zones = await bosta.zone.getCityZones(cityId);
```
