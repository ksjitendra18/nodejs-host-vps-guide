import { Request, Response } from "express";
import Todos from "../../models/todos";

const updatetodo = async (req: Request, res: Response) => {
  const todoId = req.params.id;

  const { todo, isCompleted } = req.body;

  if (!todoId) {
    return res.status(400).json({
      error: "missing_id",
      message: "Todo ID is required",
    });
  }

  try {
    await Todos.findByIdAndUpdate(todoId, {
      todo,
      isCompleted,
    });
    res.status(200).json({ message: "Updated Successfully" });
  } catch (error) {
    console.log("[UPDATE_TODOS] ERROR", error);
    res
      .status(500)
      .json({ error: "server_error", message: "Error while updating todos" });
  }
};

export default updatetodo;
