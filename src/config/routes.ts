import { Router } from "express";

import todoRouter from "../routes/todo";

const routes = Router();

routes.use("/api/v1/todos", todoRouter);

export default routes;
