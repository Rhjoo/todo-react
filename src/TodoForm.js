import React from 'react';

class TodoForm extends React.Component {
  createTodo(event) {
    event.preventDefault();
    const task = {
      todo: this.todo.value,
      completed: false
    }
    this.props.addTodo(task);
    this.todoForm.reset();
  }

  render() {
    return (
      <div className="todoList">
        <form ref={(input) => this.todoForm = input} onSubmit={(event) => this.createTodo(event)}>
          <input type="text" ref={(input) => this.todo = input} placeholder="something to do" />
          <button type="submit">Enter</button>
        </form>
      </div>
    );
    
  }
}

export default TodoForm;