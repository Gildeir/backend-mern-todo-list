const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Provide a name'],
    trim: true,
    maxlength: [50, 'Name must be less than 50 characters']
  },
  comment: String,
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('todo', todoSchema)