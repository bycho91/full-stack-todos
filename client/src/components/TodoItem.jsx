import {
  Box,
  Typography,
  IconButton,
  Checkbox,
  Input,
  Button,
} from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import { completeTodo, deleteTodo } from "../api/TodoMethods";
import EditModal from "./EditModal";

const TodoItem = ({
  todo: { todo_id, description, done },
  mutateDelete,
  mutateEdit,
}) => {
  const [completed, setCompleted] = useState(done);
  const [modal, setModal] = useState(false);

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries("todos");
  }, [modal]);

  const handleDelete = () => {
    mutateDelete(todo_id);
  };

  const handleCheck = () => {
    setCompleted(!completed);
    completeTodo(todo_id);
  };

  const handleModalClose = () => {
    setModal(false);
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
        <IconButton
          variant="text"
          color="secondary"
          disabled={completed}
          onClick={() => setModal(true)}
        >
          <AiOutlineEdit size="1.5rem" />
        </IconButton>
        <IconButton variant="text" color="warning" onClick={handleDelete}>
          <RiDeleteBin6Line size="1.5rem" />
        </IconButton>
      </Box>
      {modal && (
        <EditModal
          modal={modal}
          setModal={setModal}
          handleClose={handleModalClose}
          description={description}
          id={todo_id}
          mutateEdit={mutateEdit}
        />
      )}
    </Box>
  );
};

export default TodoItem;
