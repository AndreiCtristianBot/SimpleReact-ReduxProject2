import { createAsyncThunk } from '@reduxjs/toolkit';

const mockTasks = [
  { id: 1, text: 'Learn Redux', completed: false },
  { id: 2, text: 'Build a To-Do App', completed: true },
  { id: 3, text: 'Master React', completed: false },
];

export const loadTasks = createAsyncThunk(
  'todos/loadTasks',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockTasks), 1000);
    });
  }
);
