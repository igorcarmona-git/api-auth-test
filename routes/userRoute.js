const express = require("express");
const User = require("../models/User");

const hashPasswordMiddleware = require("../service/middlewares/user-mid/hashPassword_mid");
const userInputValidate = require("../service/middlewares/user-mid/userInputValidation_mid");
const checkUserExists = require("../service/middlewares/user-mid/checkUserExists_mid");
const {registerUser, deleteUser, alterUser, allUsers, findOneUser} = require("../controllers/userControl");

const userRouter = express.Router();

userRouter.get('/:username', findOneUser);
userRouter.delete('/:username',checkUserExists, deleteUser);
userRouter.put('/:username', checkUserExists, userInputValidate, hashPasswordMiddleware, alterUser);
userRouter.post('/', userInputValidate, hashPasswordMiddleware, registerUser);
userRouter.get('/', allUsers);

module.exports = userRouter;