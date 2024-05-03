const express = require("express");
const User = require("../models/User");
const {hashedPassword} = require("../service/hashPassword");

const registerRouter = express.Router();

registerRouter.post('/', async (req, res) => {
    const {username, email, password} = req.body;
    const hashPassword = hashedPassword(password);
    const user = await User.create({
        username, 
        email, 
        password: hashPassword
    });
    res.status(200).send(user);
});

module.exports = registerRouter;