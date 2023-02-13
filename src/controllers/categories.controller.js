const CategoriesModel = require('../models/categories.model');
const HTTPStatus = require('../helpers/HTTP.status');
const validate = require('../validations/categories.validations');

const findAll = async (_req, res) => {
  const response = await CategoriesModel.find();
  return res.status(HTTPStatus.OK).json(response);
}

const findOne = async (req, res) => {
  const { id } = req.params;
  const response = await CategoriesModel.findById(id);
  if (!response) return res.status(HTTPStatus.NOT_FOUND).send("Entity not found");

  return res.status(HTTPStatus.OK).json(response);
}

const create = async (req, res) => {
  const payload = req.body;
  validate.create(payload);

  payload.status = "ativa";
  const response = await CategoriesModel.create(payload);
  return res.status(HTTPStatus.CREATED)
    .set('Location', `/api/categories/${response._id}`)
    .json(response);
}

const edit = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  validate.edit(payload, id);

  const response = await CategoriesModel.findByIdAndUpdate(id, payload, { new: true });
  return res.status(HTTPStatus.OK)
    .set('Location', `/api/categories/${response._id}`)
    .json(response);
}

const editStatus = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  validate.editStatus(payload, id);

  const recoverDoc = await CategoriesModel.findById(id);
  recoverDoc.status = payload.status;

  const response = await CategoriesModel.findByIdAndUpdate(id, newDoc, { new: true });
  return res.status(HTTPStatus.OK)
    .set('Location', `/api/categories/${response._id}`)
    .json(response);
}

const deleteOne = async (req, res) => {
  const { id } = req.params;
  await CategoriesModel.findByIdAndDelete(id);

  return res.status(HTTPStatus.NO_CONTENT).end();
}

module.exports = {
  findAll,
  findOne,
  create,
  edit,
  editStatus,
  deleteOne,
}
