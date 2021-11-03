const todoModel = require('../models/todoModels');

const getAll = async (_req, res) => {
try {
    const todoList = await todoModel.getAll();
    return res.json(todoList);
} catch (error) { 
  return res.status(500).json({ message: error.message });
}
};

module.exports = { getAll };