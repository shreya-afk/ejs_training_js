/*
Model a car as a javascript object.
*/

"use strict";
let car = {
    modelName: "Hyundai Elite i20",
    version: "Magna plus 1.2",
    price: " ₹ 6.50 Lakh onwards",
    transmissionType: "Manual",
    engine: "1197 cc",
    luggageCapacity: "The boot of the i20 can hold 326 litres, making it one of the largest in this class, beating the 280 litres of the Volkswagen Polo and 286 litres of the Vauxhall Corsa",
    seatingCapacity: "5",
    coloursAvailable: "Polar White, Fiery Red, Star Dust, Typhoon Silver",
    mileage={
        manualDiesel: "The Manual Diesel variant has a mileage of 22.54 kmpl",
        manualPetrol: "The Manual Petrol variant has a mileage of 18.6 kmpl",
        automaticPetrol: "The Automatic Petrol variant has a mileage of 17.4 kmpl",
    },
    features={
        airConditioner:"yes",
        airBag: "yes",
        numberOfAirbag:"2",
        powerSteering: "yes",
        seatBeltWarning: "yes"
    },
    emiDetails={
        availability: "Yes",
        downpayment: "Rs.2,07,177",
        interest: "9.2%",
        tenure: "5 Years"

    }
};