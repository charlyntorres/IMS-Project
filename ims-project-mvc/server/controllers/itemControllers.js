const mongoose = require('mongoose');
const Item = require('../../models/inventory');

mongoose.connect('mongodb://127.0.0.1:27017/inventory')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error: ");
        console.log(err);
    });

// DELETE ITEM
exports.deleteItem = async (req, res) => {
    try {
        const {id} = req.params;
        await Item.findByIdAndUpdate(id, {isDeleted: true});
        res.redirect('/ims-project');
    } catch (error) {
        console.error("Error at DELETE: ", error);
    }
}

// UPDATE ITEM
exports.updateItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id); 
        res.render('update-item', {item})
    } catch (error) {
        console.log("Error at UPDATE FORM: ", error);
    }
}

// SAVE UPDATED ITEM
exports.updateItemForm = async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate(id, {...req.body});
        res.redirect('/ims-project');
    } catch (error) {
        console.log("Error at SAVING UPDATE: ", error);
    }
}

// CREATE ITEM
exports.createItem = async (req, res) => {
    try {
        res.render('create-item');
    } catch (error) {
        console.log("Error at CREATE: ", error);
    }
}

// SAVE CREATED ITEM
exports.createItemForm = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.redirect('/ims-project'); 
    } catch (error) {
        console.error("Error at SAVING CREATE:", error);
    }
}

// VIEW ITEM
exports.viewItemForm = async(req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findById(id);
        res.render('view-item', {item});
    } catch (error) {
        console.log("Error at VIEW: ", error);
    }
}

// HOME
exports.items = async (req, res) => {
    try {
        const items = await Item.find({isDeleted: false}); 
        res.render('index', { items });
    } catch (error) {
        console.error("Error at HOME:", error);
    }
};