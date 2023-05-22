const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000, BASE_PATH = 'localhost' } = process.env;
const app = express();

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/mestodb');

app.use(express.json());
app.use('/cards', cardRouter);
app.use('/users', userRouter);

app.use(express.json());
app.use('/cards', cardRouter);
app.use('/users', userRouter);
app.use((req, res, next) => {
  req.user = {
    _id: '646b640a85ed39727f7d7a5e',
  };
  next();
});

app.listen(PORT, () => {
  console.log(`Адрес сервера — http://${BASE_PATH}:${PORT}`);
});