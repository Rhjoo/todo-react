import React from 'react';

const TodoItem = (props) => {
  return (
    <li>
      {props.task.todo}
      <span> </span>
      <button onClick={() => props.deleteTodo(props.index)}>Remove</button>
    </li>
  );
};

export default TodoItem;