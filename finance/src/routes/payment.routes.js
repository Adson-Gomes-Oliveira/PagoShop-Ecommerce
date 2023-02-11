const { Router } = require('express')
const paymentController = require('../controllers/payment.controller');

const route = Router();

route.get('/', paymentController.findAll);

module.exports = route;
