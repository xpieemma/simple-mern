const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/simple-mern';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
