import { Request, Response } from "express";
import Todos from "../../models/todos";

const createTodos = async (req: Request, res: Response) => {
  const { todo } = req.body;

  if (!todo) {
    return res.status(400).json({
      error: "missing_field",
      message: "todo is required",
    });
  }

  try {
    const newTodos = await new Todos({
      todo,
    }).save();
    res.status(201).json({ message: "Added Successfully" });
  } catch (error) {
    console.log("[CREATE_TODOS] ERROR", error);
    res
      .status(500)
      .json({ error: "server_error", message: "Error while adding todos" });
  }
};

export default createTodos;
