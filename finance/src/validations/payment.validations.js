const JOI = require('joi');
const HTTPStatus = require('../../helpers/HTTP.status');

const payloadValidation = (payload) => {
  const { error } = JOI.object({
    value: JOI.number().min(1).required(),
    buyerName: JOI.string().required(),
    cardNumber: JOI.number().required(),
    expirationDate: JOI.date().required(),
    cvv: JOI.number().required(),
  }).validate(payload);

  if (error) return { code: HTTPStatus.UN_ENTITY, message: error.message };
  return null;
}

module.exports = {
  payloadValidation,
}
