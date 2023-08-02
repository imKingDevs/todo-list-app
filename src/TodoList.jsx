import React from "react";

const TodoList = (props) => {

  return (
    <>
      <div className="todo_li">
        <button onClick={() => {
          props.onSelect(props.id)
        }}>&times;</button>
        <li> {props.textItem} </li>
      </div>
    </>
  )
}

export default TodoList;