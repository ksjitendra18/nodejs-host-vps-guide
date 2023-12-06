import mongoose from "mongoose";

const TodosSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Todos = mongoose.model("Todos", TodosSchema);
export default Todos;
