import colors from 'colors';
import mongoose from 'mongoose';

const db = () => {
  mongoose.connect('mongodb://localhost/ts-todo-app', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log(colors.green('Connected to MongoDB 🙌!')));
};

export default db;
