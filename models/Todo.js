const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  case: { type: String, required: true },
  condition: { type: String, required: true, trim: true },
  isCompleted: { type: Boolean, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;