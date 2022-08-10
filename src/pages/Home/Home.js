import React from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import TodoList from "../../components/TodoList/TodoList";

export default function Home() {
  return (
    <>
      <h1>ToDo List</h1>
      <AddTodo />
      <TodoList />
    </>
  );
}
