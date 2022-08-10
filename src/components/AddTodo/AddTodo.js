import React, { useState } from "react";

import { usePostTodoMutation } from "../../store/apis/TheTodoListApi";

export default function AddTodo() {
  const [postRule] = usePostTodoMutation();
  const [inputValue, setInputValue] = useState("");

  const handleAddRule = () => {
    if (inputValue.length > 0) {
      let body = {
        id: Math.random(),
        name: inputValue,
        status: "unselect",
      };
      postRule(body);
    }
  };
  return (
    <div className="add-todo-wrapper">
      <div className="add-todo-container">
        <form className="add-todo-block">
          <label>
            <input
              placeholder="New Task"
              type="text"
              name="name"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <input
            className="add-button"
            type="submit"
            value="Add"
            onClick={handleAddRule}
          />
        </form>
      </div>
    </div>
  );
}
