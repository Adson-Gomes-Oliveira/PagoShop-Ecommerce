require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger/products-swagger.json');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.get('/health-check', (_req, res) => res.status(200).send('Connection OK'));
app.use('/api/categories', routes.categoriesRoutes);
app.use('/api/admin/categories', routes.categoriesAdminRoutes);
app.use('/api/products', routes.productsRoutes);
app.use('/api/admin/products', routes.productsAdminRoutes);
app.use(errorMiddleware);

app.use('/api-docs', swaggerUI.serve);
app.get('/api-docs', swaggerUI.setup(swaggerDocument));

module.exports = app;
