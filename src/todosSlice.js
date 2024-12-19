import { createSlice } from '@reduxjs/toolkit';
import { loadTasks } from './loadTasks.js';

const todosSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTasks.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(loadTasks.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export { loadTasks };
export default todosSlice.reducer;
