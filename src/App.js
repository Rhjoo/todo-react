import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.state = {
      todos: {}
    };
  }
  
  addTodo(task) {
    const todos = {...this.state.todos};
    const timestamp = Date.now();
    todos[`todo-${timestamp}`] = task;
    this.setState({ todos });
  }
  
  deleteTodo(task) {
    const todos = {...this.state.todos};
    delete todos[task];
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
