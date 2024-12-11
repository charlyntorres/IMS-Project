const mongoose = require('mongoose');
const Item = require('../models/inventory');

mongoose.connect('mongodb://127.0.0.1:27017/inventory')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error: ");
        console.log(err);
    });

const seedDb = async() => {
    try {
        await Item.deleteMany({});
        await Item.insertMany([
            {
                name: 'Coke',
                category: 'Beverage',
                quantity: 25,
                price: 50,
                description: 'Softdrinks',
                createdAt: new Date('2024-12-09'),
                required: true,
                isDeleted: false
            },
            { 
                name: 'SkyFlakes',
                category: 'Food',
                quantity: 38,
                price: 30,
                description: 'Biscuit',
                createdAt: new Date('2024-12-09'),
                required: true,
                isDeleted: false
            },
            {
                name: 'Nerds',
                category: 'Food',
                quantity: 55,
                price: 105,
                description: 'Candy',
                createdAt: new Date('2024-12-09'),
                required: true,
                isDeleted: false
            }
        ]);
    } catch (error) {
        console.log("Error at SEEDING: ", error);
    }
};

seedDb().then(() => {
    mongoose.connection.close();
})