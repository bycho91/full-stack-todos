import { Container, Typography } from "@mui/material";
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";
import { useQueryClient, useMutation } from "react-query";
import { addTodo, deleteTodo, editTodo } from "./api/TodoMethods";

function App() {
  const queryClient = useQueryClient();

  const { mutateAsync: mutateAdd } = useMutation(
    (newTodo) => addTodo(newTodo),
    {
      onSuccess: queryClient.invalidateQueries("todos"),
      onError: (err) => console.log(err),
    }
  );

  const { mutateAsync: mutateDelete } = useMutation((id) => deleteTodo(id), {
    onSuccess: queryClient.invalidateQueries("todos"),
    onError: (err) => console.log(err),
  });

  const { mutateAsync: mutateEdit } = useMutation(
    (id, newDes) => editTodo(id, newDes),
    {
      onSuccess: queryClient.invalidateQueries("todos"),
      onError: (err) => console.log(err),
    }
  );

  return (
    <div className="app">
      <Container
        maxWidth="sm"
        sx={{
          border: "2px solid black",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          my={3}
          fontWeight={800}
        >
          PERN.TODO
        </Typography>
        <InputBar mutateAdd={mutateAdd} />
        <TodoList mutateDelete={mutateDelete} mutateEdit={mutateEdit} />
      </Container>
    </div>
  );
}

export default App;
