const JOI = require('joi');
const HTTPStatus = require('../helpers/HTTP.status');
const customError = require('../helpers/error.custom');

const payload = (payloadOrder) => {
  const { error } = JOI.object({
    clientId: JOI.string().required(),
    street: JOI.string().required(),
    number: JOI.string().required(),
    cep: JOI.number().required(),
    city: JOI.string().required(),
    state: JOI.string().min(2).max(2).pattern(new RegExp('^(AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MG|MS|MT|PA|PB|PE|PI|PR|RJ|RN|RO|RR|RS|SC|SE|SP|TO)$')).required(),
    productList: JOI.array().items(JOI.object({
      productId: JOI.string().required(),
      quantity: JOI.number().required(),
      discount: JOI.number().required(),
      actualUnitPrice: JOI.number().required(),
    })).required(),
  }).validate(payloadOrder);

  console.log(error);

  if (error) throw customError(error.message, HTTPStatus.UN_ENTITY);
  return null;
}

module.exports = {
  payload,
}
