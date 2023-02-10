const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express()

app.use(express.json());
app.use(helmet());
app.use(cors());
app.get('/health-check', (req, _res) => req.setEncoding('OK!'));

module.exports = app;
