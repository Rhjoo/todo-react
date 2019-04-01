import React from 'react'

function TodoItem(props) {
  return (
    <li>
      {props.task}
      <span> </span>
      <button onClick={() => props.deleteTodo(props.index)}>Remove</button>
    </li>
  )
}

export default TodoItem
