import axios from "axios";
const URL = "http://localhost:5000";

// CREATE a todo
export const addTodo = async (task) => {
  try {
    await axios.post(`${URL}/todos`, {
      description: task,
    });
  } catch (err) {
    console.error(err.message);
  }
};

// GET All todos
export const getAllTodos = async () => {
  try {
    const data = await axios.get(`${URL}/todos`);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

// UPDATE a todo
export const completeTodo = async (id) => {
  try {
    const data = await axios.patch(`${URL}/todos/${id}`);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

// DELETE a todo
export const deleteTodo = async (id) => {
  try {
    const deleted = await axios.delete(`${URL}/todos/${id}`);
    return deleted;
  } catch (err) {
    console.error(err.message);
  }
};
