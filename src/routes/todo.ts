import { Router } from 'express';
import { getTodos, createTodo } from '../controllers/todo';

const todoRouter = Router();

todoRouter.get('/', [], getTodos);
todoRouter.post('/', [], createTodo);

export default todoRouter;