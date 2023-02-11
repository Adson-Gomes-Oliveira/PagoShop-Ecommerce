const { Router } = require('express')
const paymentController = require('../controllers/payment.controller');

const route = Router();

route.get('/', paymentController.findAll);
route.get('/:id', paymentController.findById);
route.post('/', paymentController.create);

module.exports = route;
