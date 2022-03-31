import { Box, Typography, Checkbox } from "@mui/material";
import { useQuery } from "react-query";
import { getAllTodos } from "../api/TodoMethods";
import TodoItem from "./TodoItem";

const TodoList = ({ mutateDelete, mutateEdit }) => {
  const fetchAllTodos = async () => {
    const data = await getAllTodos();
    return data.data;
  };

  const {
    data: todos,
    isLoading,
    isFetching,
    isError,
  } = useQuery("todos", fetchAllTodos);
  if (isError) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <Box sx={{ width: "100%", marginBottom: "1em" }}>
      {todos &&
        todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.todo_id}
            mutateDelete={mutateDelete}
            mutateEdit={mutateEdit}
          />
        ))}
    </Box>
  );
};

export default TodoList;
