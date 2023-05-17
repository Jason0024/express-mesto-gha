const userRouter = require('express').Router();

const {
  getUserList, getUserId, createUser, updateUserData, updateUserAvatar,
} = require('../controllers/users');

// Получить или создать: список, отдельный объект
userRouter.get('/', getUserList);
userRouter.get('/:userId', getUserId);
userRouter.post('/', createUser);

module.exports = userRouter;
