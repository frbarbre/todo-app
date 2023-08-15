import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

export default Todo;
