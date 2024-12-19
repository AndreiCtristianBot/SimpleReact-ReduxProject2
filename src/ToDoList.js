import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTasks, addTodo, toggleTodo, deleteTodo } from './todosSlice';

const ToDoList = () => {
  const { todos, isLoading, hasError } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const input = document.getElementById('newTaskInput');
    if (input.value.trim() !== '') {
      dispatch(addTodo(input.value));
      input.value = '';
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do List</h1>

      {/* Form pentru adăugarea unui nou task */}
      <form className="d-flex mb-4" onSubmit={handleAddTodo}>
        <input
          type="text"
          id="newTaskInput"
          className="form-control me-2"
          placeholder="Add a new task"
        />
        <button className="btn btn-primary" type="submit">Add</button>
      </form>

      {/* Afișarea task-urilor */}
      {isLoading ? (
        <p className="text-center">Loading tasks...</p>
      ) : hasError ? (
        <p className="text-center text-danger">Failed to load tasks.</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? 'list-group-item-success' : ''
              }`}
            >
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;


