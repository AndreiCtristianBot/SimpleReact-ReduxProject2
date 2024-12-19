import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import ToDoList from './ToDoList.js';

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Counter</Link></li>
          <li><Link to="/todo">To-Do List</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todo" element={<ToDoList />} />
      </Routes>
    </div>
  );
};



