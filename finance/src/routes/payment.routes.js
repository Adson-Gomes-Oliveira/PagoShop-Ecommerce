const { Router } = require('express')
const paymentController = require('../controllers/payment.controller');

const route = Router();

route.get('/', paymentController.findAll);
route.get('/:id', paymentController.findById);
route.patch('/:id', paymentController.changePaymentStatus);
route.post('/', paymentController.create);

module.exports = route;
