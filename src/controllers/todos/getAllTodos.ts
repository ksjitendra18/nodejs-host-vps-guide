import { Request, Response } from "express";
import Todos from "../../models/todos";

const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todos.find({});
    res.status(200).json({ todos });
  } catch (error) {
    console.log("[GET_TODOS] ERROR", error);
    return res.status(500).json({ message: "Error while fetching todos" });
  }
};

export default getAllTodos;
