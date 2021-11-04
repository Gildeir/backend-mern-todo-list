const mongoose = require('mongoose');

const uri = process.env.MONGO_CONNECT;
require('dotenv').config({ path: '.env' })

const connection = (uri) => {
  return mongoose.connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connection;