import colors from 'colors';
import express from 'express';
import cors from 'cors';
import db from './config/db';
import routes from './config/routes';

const app = express();

app.use(express.json());
app.use(cors());
db();
app.use(routes);

const port: number = 4000;

app.listen(port, () => console.log(colors.green(`Connected to port ${port} 🚀!`)));