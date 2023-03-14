const mongoose = require('mongoose');
const app = require('./app');
require('dotenv/config');
require('./redis/blocklist');

const PORT = process.env.PORT || 3002;
const USER = process.env.DB_USER || 'root';
const PASSWORD = process.env.DB_PASSWORD || 'secret';
const HOST = process.env.DB_HOST || '127.0.0.1';
const DATABASE = process.env.DB_NAME || 'ecomm-account';

mongoose.connect(`mongodb://${USER}:${PASSWORD}@${HOST}:27017/${DATABASE}?authSource=admin`)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error(error));

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));