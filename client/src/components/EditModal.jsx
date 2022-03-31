import { useState } from "react";
import { Modal, Box, Typography, Input, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { editTodo } from "../api/TodoMethods";

const EditModal = ({
  setModal,
  handleClose,
  modal,
  description,
  id,
  mutateEdit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: description,
    },
  });

  const onSubmit = (data) => {
    editTodo(id, data.newDescription);
    setModal(false);
  };

  return (
    <>
      <Modal
        onClose={handleClose}
        open={modal}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "400px",
            height: "200px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1em",
            position: "relative",
          }}
        >
          <Typography
            variant="h4"
            sx={{ position: "absolute", textAlign: "center", top: ".5em" }}
          >
            Edit Task
          </Typography>
          <form
            style={{
              width: "100%",
              display: "flex",
              gap: "1em",
              position: "relative",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              sx={{ flex: "1" }}
              defaultValue={description}
              {...register("newDescription", { required: true })}
            />
            <Button type="submit" variant="outlined">
              Save
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default EditModal;
