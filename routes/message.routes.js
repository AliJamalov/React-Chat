import express from "express";

import { sendMessage, getMessage } from "../controllers/message.controller.js";

// Midllewares
import { protectRoute } from "../middlewares/protectRoutes.js";

const router = express.Router();

router.use(protectRoute);

router.get("/:talkingToId", getMessage);

router.post("/:talkingToId", sendMessage);

export default router;