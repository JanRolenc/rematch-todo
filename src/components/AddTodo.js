import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Addtodo() {
  const [myTodo, setMyTodo] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMyTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch.myTodos.addTodo(myTodo);
    setMyTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write what needs to be done"
          onChange={handleChange}
          value={myTodo}
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}

export default Addtodo;
