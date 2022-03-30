import { Container, Typography } from "@mui/material";
import InputBar from "./components/InputBar";
import TodoList from "./components/TodoList";

function App() {
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
        <InputBar />
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
