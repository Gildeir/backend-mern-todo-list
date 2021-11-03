require('dotenv').config();

const todoController = require('./controllers/todoController')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', todoController.getAll);

const {  PORT = 3000 } = process.env;

server.listen(PORT, () => {
  console.log(`server ouvndo na porta ${PORT}`);
});