const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemControllers');

router.get('/', itemController.items);                                  // LIST OF ALL ITEMS
router.get('/view-item/:id', itemController.viewItemForm);              // VIEW INDIVIDUAL ITEM

router.get('/create-item', itemController.createItem);                  // CREATE ITEM
router.post('/create-item-form', itemController.createItemForm);        // SAVE CREATED ITEM

router.get('/update-item/:id', itemController.updateItem);              // UPDATE ITEM
router.patch('/update-item-form/:id', itemController.updateItemForm);   // SAVE UPDATED ITEM

router.delete('/delete-item/:id', itemController.deleteItem);           // DELETE AN ITEM

module.exports = router;