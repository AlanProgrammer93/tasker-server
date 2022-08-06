import express from "express";

import { requireSignin } from "../middlewares";

const router = express.Router();

// controllers
const {
  create,
} = require("../controllers/task");


router.post("/task", create);

export default router;
