const express = require("express");
const app = express();
const port = 3000;
const db = require("./infra/db");
const userRouter = require("./routes/userRoute");
const registerRouter = require("./routes/userRoute");

app.use(express.json());

db.sync();

app.get("/", (req, res) =>{
    res.send("Hello world!");
});

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`app on http://localhost:${port}`);
})