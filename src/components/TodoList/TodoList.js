import React from "react";

import TodoListItem from "../TodoList/TodoListItem";

import { useGetTheTodoListApiQuery } from "../../store/apis/TheTodoListApi";

export default function TodoList() {
  const { data } = useGetTheTodoListApiQuery();

  console.log("data", data);

  return (
    <div className="todo-list-wrapper">
      <div className="todo-list-container">
        {data &&
          data.map((item, index) => {
            return <TodoListItem data={item} key={index} />;
          })}
      </div>
    </div>
  );
}
