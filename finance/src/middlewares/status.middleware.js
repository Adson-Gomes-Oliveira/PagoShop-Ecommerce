const { Payments } = require('../database/models');
const HTTPStatus = require('../../helpers/HTTP.status');

const statusMiddleware = async (req, res, next) => {
  const { id } = req.params;

  const payment = await Payments.findByPk(id);
  
  if (payment.status == 'CONFIRMED' || payment.status == 'CANCELED') {
    return res
      .status(HTTPStatus.UN_ENTITY)
      .send('The payment status can not be changed, is already confirmed or canceled');
  }

  if (payment.status !== 'CREATED') {
    return res.status(HTTPStatus.UN_ENTITY).send('Status Invalid !');
  }

  next();
}

module.exports = statusMiddleware;
