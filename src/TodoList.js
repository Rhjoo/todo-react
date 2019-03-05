import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {Object.keys(props.todos).map(key => <TodoItem key={key} index={key} task={props.todos[key]} deleteTodo={props.deleteTodo} />)}
    </ul>
  );
};

export default TodoList;