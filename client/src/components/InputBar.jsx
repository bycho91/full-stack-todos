import { Box, Input, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { addTodo } from "../api/TodoMethods";
import { useMutation } from "react-query";

const InputBar = ({ mutateAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const { mutateAsync } = useMutation((newTodo) => addTodo(newTodo), {
  //   onSuccess: queryClient.invalidateQueries("todos"),
  //   onError: (err) => console.log(err),
  // });

  const onSubmit = async (data) => {
    mutateAdd(data.task);
    reset();
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: ".5em",
        justifyContent: "center",
        marginBottom: "1em",
        position: "relative",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Input
          variant="outlined"
          placeholder="add a todo..."
          {...register("task", { required: true })}
          color="success"
          sx={{ width: "300px", padding: ".3em" }}
        />
        {errors.task && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              color: "red",
              fontSize: ".7rem",
            }}
          >
            This field is required
          </div>
        )}
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ marginLeft: "1em" }}
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default InputBar;
