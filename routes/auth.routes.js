import express from "express";

// Controllers
import {signIn, signUp, logOut} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-in", signIn);

router.post("/sign-up", signUp);

router.post("/log-out", logOut);

export default router;