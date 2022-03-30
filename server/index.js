const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const pool = require("./db");

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES //

// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (description, done) VALUES($1, $2) RETURNING *",
      [description, "FALSE"]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all Todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos ORDER BY todo_id");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a Todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      "UPDATE todos SET description=$1 WHERE todo_id=$2 RETURNING *",
      [description, id]
    );
    res.json(updatedTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update Todo: toggle completed
app.patch("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const doneTodo = await pool.query(
      "UPDATE todos SET done = NOT done WHERE todo_id=$1 RETURNING *",
      [id]
    );
    res.json(doneTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// Delete todo by ID
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query(
      "DELETE FROM todos WHERE todo_id=$1 RETURNING *",
      [id]
    );
    res.json(deletedTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// LISTEN
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
