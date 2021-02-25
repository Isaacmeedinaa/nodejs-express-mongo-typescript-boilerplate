import { Request, Response, NextFunction } from 'express';
import { Todo } from '../models/todo'

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  const todos = await Todo.find().select('-__v');

  return res.send(todos);
};

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { title, description } = req.body;

  try {
    const todo = Todo.build({ title: title, description: description });
    await todo.save();

    return res.status(200).send(todo);
  } 
  catch (err) {
    return res.status(400).send(err);
  }
}