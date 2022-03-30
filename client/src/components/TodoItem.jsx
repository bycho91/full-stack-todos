import { Box, Typography, IconButton, Checkbox } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { useQueryClient, useMutation } from "react-query";

const TodoItem = ({ todo: { todo_id, description } }) => {
  const handleDelete = () => {};

  const handleEdit = () => {};

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
        <Checkbox />
        <Typography variant="h5">{description}</Typography>
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
        <IconButton variant="text" color="warning">
          <RiDeleteBin6Line size="1.5rem" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoItem;
