import { Box, Typography, IconButton, Checkbox } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { completeTodo, deleteTodo } from "../api/TodoMethods";

const TodoItem = ({ todo: { todo_id, description, done } }) => {
  const [completed, setCompleted] = useState(done);

  const queryClient = useQueryClient();
  const { mutateAsync: mutateDelete } = useMutation((id) => deleteTodo(id), {
    onSuccess: queryClient.invalidateQueries("todos"),
    onError: (err) => console.log(err),
  });

  const handleDelete = () => {
    mutateDelete(todo_id);
  };
  const handleEdit = () => {};

  const handleCheck = () => {
    setCompleted(!completed);
    completeTodo(todo_id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid whitesmoke",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: ".5em",
        }}
      >
        <Checkbox onChange={handleCheck} />
        <p>{todo_id}</p>
        <Typography
          variant="h5"
          sx={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton variant="text" color="secondary">
          <AiOutlineEdit size="1.5rem" />
        </IconButton>
        <IconButton variant="text" color="warning" onClick={handleDelete}>
          <RiDeleteBin6Line size="1.5rem" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoItem;
