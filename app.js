const express = require("express");
const cors = require("cors");

const userRouter = require("./routers/contact.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/contact", userRouter);

module.exports = app;
