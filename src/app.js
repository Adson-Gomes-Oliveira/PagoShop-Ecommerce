require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger/accounts-swagger.json');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/health-check', (_req, res) => res.status(200).send('Connection OK'));
app.use('/api/users', routes.usersRoutes);
app.use('/api/admin/users', routes.usersAdminRoutes);
app.use(errorMiddleware);

app.use('/api-docs', swaggerUI.serve);
app.get('/api-docs', swaggerUI.setup(swaggerDocument));

module.exports = app;
