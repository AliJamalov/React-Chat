import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// Routes
import AuthRouter from "./routes/auth.routes.js";
import MessageRouter from "./routes/message.routes.js";
import UserRouter from "./routes/user.routes.js";

const server = express();

server.use(express.json());
server.use(cookieParser());

dotenv.config();

server.use("/auth", AuthRouter);
server.use("/users", UserRouter);
server.use("/messages", MessageRouter);

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

server.listen(PORT, () => {
    console.log(`Server listeinig on ${PORT}`)
});

mongoose
.connect(MONGODB_URL)
.then(() => {
    console.log("Database connection established");
})
.catch((err) => {
    console.log(err);
})