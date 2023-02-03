const { Router } = require('express');
const categoriesController = require('../controllers/categories.controller');

const router = Router();

router.get('/', categoriesController.findAll);

module.exports = router;
