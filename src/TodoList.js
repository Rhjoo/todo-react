import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  return (
    <div>
      {props.todos.map(item => <TodoItem key={item.id} index={item.id} task={item.task} deleteTodo={props.deleteTodo}/>)}
    </div>
  )
}

export default TodoList