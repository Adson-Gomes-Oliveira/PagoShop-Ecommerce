const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const paymentRoutes = require('./routes/payment.routes');

const app = express()

app.use(express.json());
app.use(helmet());
app.use(cors());
app.get('/health-check', (_req, res) => res.send('OK!'));
app.use('/api/payments', paymentRoutes);

module.exports = app;
