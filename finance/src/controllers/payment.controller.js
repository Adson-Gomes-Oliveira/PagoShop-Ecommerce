const { Payments } = require('../database/models');
const HTTPStatus =  require('../../helpers/HTTP.status');

const findAll = async (req, res) => {
  const response = await Payments.findAll();
  return res.status(HTTPStatus.OK).json(response);
};

module.exports = {
  findAll,
}
