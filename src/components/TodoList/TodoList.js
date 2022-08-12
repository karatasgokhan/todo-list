import React from "react";

import TodoListItem from "../TodoList/TodoListItem";

import { useGetTheTodoListApiQuery } from "../../store/apis/TheTodoListApi";
import EmptyTodoList from "./EmptyTodoList";

export default function TodoList() {
  const { data } = useGetTheTodoListApiQuery();

  return (
    <div className="todo-list-wrapper">
      <div className="todo-list-container">
        {data && data.length > 0 ? (
          data.map((item, index) => {
            return <TodoListItem data={item} key={index} />;
          })
        ) : (
          <EmptyTodoList />
        )}
      </div>
    </div>
  );
}
