const JOI = require('joi');
const HTTPStatus = require('../helpers/HTTP.status');
const customError = require('../helpers/error.custom');

const payload = (payloadToValidate) => {
  const { error } = JOI.object({
    product: JOI.string().min(3).pattern(/^[^0-9]/).required(),
    description: JOI.string().required(),
    slug: JOI.string().pattern(/^[a-zA-Z0-9-]+$/).required(),
    unit_price: JOI.number().required(),
    quantity: JOI.number().min(1).max(10000).required(),
    category_id: JOI.string().required(),
  }).validate(payloadToValidate);

  if (error) throw customError(error.message, HTTPStatus.UN_ENTITY);
};

module.exports = {
  payload,
};
