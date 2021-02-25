import mongoose from 'mongoose';

// Defines the accepted structure of a Todo
interface ITodo {
  title: string;
  description: string;
};

// Defines the accepted structure of a Todo Document
interface TodoDoc extends mongoose.Document {
  title: string;
  description: string;
}

// Defines the accepted structure of the Todo model. 
// This interface defines a new function for the Todo Model
// and inherits the mongoose Model methods.
interface TodoModelInterface extends mongoose.Model<TodoDoc> {
  build(todo: ITodo): TodoDoc;
}

// Defines the mongoose Schema
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// Defines the build function
todoSchema.statics.build = (todo: ITodo) => {
  return new Todo(todo);
}

// Defines the Todo Model and specifies what interface to use.
const Todo = mongoose.model<any, TodoModelInterface>('Todo', todoSchema);

export { Todo };