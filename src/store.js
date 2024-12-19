import { configureStore } from '@reduxjs/toolkit';
import  counterReducer  from './CounterSlice.js';
import todosReducer from './todosSlice.js';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
    },
});