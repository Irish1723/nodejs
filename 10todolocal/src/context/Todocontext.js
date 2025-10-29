import React, { createContext, useContext, useState } from "react";

// Create context
export const TodoContext = createContext();

// Custom hook to use Todo context
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Learn React", completed: false },
  ]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const updateTodo = (id, updatedTodo) =>
    setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  const toggleComplete = (id) =>
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};
