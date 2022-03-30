import { Box, Typography, Checkbox } from "@mui/material";
import { useQuery } from "react-query";
import { getAllTodos } from "../api/TodoMethods";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const fetchAllTodos = async () => {
    const data = await getAllTodos();
    return data.data;
  };

  const { data: todos } = useQuery("todos", fetchAllTodos);

  console.log(todos);

  return (
    <Box sx={{ width: "100%" }}>
      {todos && todos.map((todo) => <TodoItem todo={todo} />)}
    </Box>
  );
};

export default TodoList;
