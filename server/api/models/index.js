const mongoose = require('mongoose');
const { readdirSync } = require('fs');
const { join } = require('path');
require('dotenv').config();
const env = process.env;

const models = {};

const options = {
    poolSize: env.MONGO_POOL_SIZE,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  };

mongoose.connect(env.MONGO_URI, options);

const db = mongoose.connection;

db.on('error', () => console.log('mongo connection error'));
db.on('open', () => console.log('mongo connected'));

readdirSync(join(__dirname, 'schemas'))
  .filter(file => /\.schema\.js/.test(file))
  .forEach(file => {
      const schema = require(join(__dirname, 'schemas', file));
      const fileName = file.replace(/\.schema\.js/, '');
      models[fileName] = mongoose.model(fileName, schema);  
  });

module.exports = models;