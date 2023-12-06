import express from "express";
import getAllTodos from "../controllers/todos/getAllTodos";
import createTodos from "../controllers/todos/createTodos";
import deleteTodo from "../controllers/todos/deleteTodo";
import updatetodo from "../controllers/todos/updateTodo";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodos);
router.patch("/:id", updatetodo);
router.delete("/:id", deleteTodo);

export default router;
