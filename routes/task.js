import express from "express";

import { canUpdateDelete, requireSignin } from "../middlewares";

const router = express.Router();

// controllers
const {
  create,
  tasks,
  update,
  remove,
  taskCount
} = require("../controllers/task");


router.post("/task", requireSignin, create);
router.get("/tasks/:page", tasks);
router.put("/task/:taskId", requireSignin, canUpdateDelete, update);
router.delete("/task/:taskId", requireSignin, canUpdateDelete, remove);
router.get("/task-count", taskCount);

export default router;
