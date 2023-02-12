const { Router } = require('express')
const paymentController = require('../controllers/payment.controller');
const statusMiddleware = require('../middlewares/status.middleware');

const route = Router();

route.get('/', paymentController.findAll);
route.get('/:id', paymentController.findById);
route.patch('/:id', statusMiddleware, paymentController.changePaymentStatus);
route.post('/', paymentController.create);

module.exports = route;
