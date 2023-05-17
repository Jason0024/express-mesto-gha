const User = require('../models/user');

const getUserList = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

const getUserId = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((userObject) => res.send({ data: userObject }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports = {
  getUserList, getUserId, createUser,
};