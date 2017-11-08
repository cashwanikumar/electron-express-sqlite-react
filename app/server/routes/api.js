import express from 'express';
const controller = require('../controllers');

const router = express.Router();

router.get('/test', controller.testController.getlist);
// router.post('/items', controller.groceryListController.createlist);

module.exports = router;