require('express-async-errors');
require('./middlewares/auth.middleware');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const paymentRoutes = require('./routes/payment.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.get('/health-check', (_req, res) => res.status(200).send('Connection OK'));
app.use('/api/payments', paymentRoutes);
app.use(errorMiddleware);

module.exports = app;
