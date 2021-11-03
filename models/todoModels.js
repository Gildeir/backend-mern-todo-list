const connection = require('./connection');
// const { ObjectId } = require('mongodb');

const getAll = async () => {
  const db = await connection();
  const listsFromDB = await db.collection('todo').find().toArray();
  return listsFromDB;
};


module.exports = {
  getAll,
};