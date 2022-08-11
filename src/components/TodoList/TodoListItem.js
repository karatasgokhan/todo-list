import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";

import {
  useDeleteTodoMutation,
  usePatchTodoMutation,
  useGetTheTodoListApiQuery,
} from "../../store/apis/TheTodoListApi";

export default function TodoListItem({ data }) {
  const [deleteRule] = useDeleteTodoMutation();
  const [patchRule] = usePatchTodoMutation();
  const { refetch } = useGetTheTodoListApiQuery();

  const handleDeleteTodo = (id) => {
    if (id) {
      deleteRule(id)
        .unwrap()
        .then(() => refetch());
    }
  };

  const handleUpdateTodo = () => {
    let body = {
      ...data,
      status: data.status === "selected" ? "unselected" : "selected",
    };
    patchRule({ id: data.id, todo: body })
      .unwrap()
      .then(() => refetch());
  };

  return (
    <>
      <div className="todo-list-item">
        <div
          className={`select-item ${
            data.status === "selected" ? "selected" : ""
          }`}
        >
          <div
            className="select-box"
            onClick={() => {
              handleUpdateTodo();
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="text-item">{data.name}</div>
        </div>
        <div
          className="delete-item"
          onClick={() => {
            handleDeleteTodo(data.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
    </>
  );
}
