const { Payments } = require('../database/models');
const HTTPStatus =  require('../../helpers/HTTP.status');
const validations = require('../validations/payment.validations');

const findAll = async (_req, res) => {
  const response = await Payments.findAll();
  return res.status(HTTPStatus.OK).json(response);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const response = await Payments.findByPk(id);
  const { cvv:_, ...responseWithoutCVV } = response.dataValues;

  return res.status(HTTPStatus.OK).json(responseWithoutCVV);
}

const create = async (req, res) => {
  const payload = req.body;
  const valid = validations.payloadValidation(payload);
  if (valid) return res.status(valid.code).send(valid.message);

  const response = await Payments.create(payload);
  return res
    .status(HTTPStatus.CREATED)
    .header({location: `/api/payments/${response.id}`})
    .json(response);
}

const confirmPayment = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const valid = validations.confirmPaymentValidation(payload);
  if (valid) return res.status(valid.code).send(valid.message);
  await Payments.update({ status: 'CONFIRMED' }, { where: { id } });

  // Criar nota fiscal e recuperar status;

  return res.status(HTTPStatus.OK).json();
}

const cancelPayment = async (req, res) => {
  const { id } = req.params;

  await Payments.update({ status: 'CANCELED' }, { where: { id } });
  const paymentCanceled = await Payments.findByPk(id);

  return res.status(HTTPStatus.OK).json({
    id: paymentCanceled.id,
    status: paymentCanceled.status,
  });
}

module.exports = {
  findAll,
  findById,
  create,
  confirmPayment,
  cancelPayment,
}
