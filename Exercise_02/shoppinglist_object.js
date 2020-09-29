/*
Model shopping list as an object. Each item in the list is also an object.
*/
"use strict";
let shoppingList={
    electricalAppliances= ["air conditioners", "washing machine", "refrigerators"],
    airConditioners={
        name: "Godrej 3 star Split AC ",
        brand: "Godrej",
        price: "Rs.31,490.00",
        manufacturerWarranty : "1 year on product, 1 year on condenser, 5 years on compressor",
        quantity: 1
    },
    washingMachine ={
        name:"IFB Fully-Automatic Front Loading Washing Machine",
        brand: "Indian Fine Blanks",
        price: "Rs.39,490.00",
        manufacturerWarranty: "4 years",
        quantity: 1
    },
    refrigerators={
        name:"Whirlpool Single Door Refrigerator",
        brand: "Whirpool",
        price: "Rs.18,790.00",
        manufacturerWarranty: "1 year on product, 10 years on compressor",
        quantity: 1
    },
    groceryItems=["Bakery and Bread","Meat and Seafood", "Dairy and Eggs"],
    bakeryAndBread = {
        name: "whole grain bread, white bread, wheat bread ",
        quantity: "1 Each"
    },
    meatAndSeafood = {
        meat: "lamb-1 Kg",
        poultry: "Chicken-1.5 Kg",
        seafood : "fish- 1 Kg, crab- 1 Kg, lobster- 1 Kg",
    },
    dairyAndEgg={
        items:"butter, cheese, yogurt, milk",
        quantity:" 1 Packet each" 
    }
};
