import { Request, Response } from "express";
import Todos from "../../models/todos";

const deleteTodo = async (req: Request, res: Response) => {
  const todoId = req.params.id;

  if (!todoId) {
    return res.status(400).json({
      error: "missing_id",
      message: "Todo ID is required",
    });
  }

  try {
    await Todos.findByIdAndDelete(todoId);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log("[DELETE_TODOS] ERROR", error);
    res
      .status(500)
      .json({ error: "server_error", message: "Error while deleting todos" });
  }
};

export default deleteTodo;
