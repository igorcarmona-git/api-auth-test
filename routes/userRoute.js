const express = require("express");
const app = express();
const User = require("../models/User");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    try{
        const users = await User.findAll();
        res.status(200).send(users);
    }catch(err){
        res.status(500).send(err);
    }
});

module.exports = userRouter;