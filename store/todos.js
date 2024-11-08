import { createSlice } from "@reduxjs/toolkit";

// TODO INTERFACE EXAMPLE
// interface Todo {
//   id: string;
//   text: string;
// }

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      text: "TODO 1",
    },
    {
      id: 2,
      text: "TODO 2",
    },
    {
      id: 3,
      text: "TODO 3",
    },
    {
      id: 4,
      text: "TODO 4",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      const todoToDeleteIndex = state.findIndex(
        (todo) => todo.id === action.payload
      );
      state.splice(todoToDeleteIndex, 1);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
