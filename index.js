require('dotenv').config({ path: '.env' })

const connection = require('./models/connection');

const todoController = require('./models/todoModels')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/todo', todoController.getAllData);
app.post('/todo', todoController.createData);



// //Middleware
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Origin', '*')
  
//   if (req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
//     return res.status(200).json({})
//   }
  
//   next();
// })

app.use(express.json());

const PORT = 3000 || process.env;

//Connection
const start = async () => {
  try {
    await connection(process.env.MONGO_CONNECT);
    app.listen(PORT, (_req, res) => {
      console.log(`server listening to port: ${PORT}`);
    })
  } catch (error) { return res.status(500).json({ message: error.message }) }
}

start();


// app.listen(PORT, () => {
//   console.log(`server ouvndo na porta ${PORT}`);
// });