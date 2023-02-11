const { Payments } = require('../database/models');
const HTTPStatus =  require('../../helpers/HTTP.status');
const validations = require('../validations/payment.validations');

const findAll = async (_req, res) => {
  const response = await Payments.findAll();
  return res.status(HTTPStatus.OK).json(response);
};

const create = async (req, res) => {
  const payload = req.body;
  const valid = validations.payloadValidation(payload);
  if (valid) return res.status(valid.code).send(valid.message);

  const response = await Payments.create(payload);
  return res.status(HTTPStatus.CREATED).json(response);
}

module.exports = {
  findAll,
  create,
}
