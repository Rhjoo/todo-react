
import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: "",
      todos: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.createTodo = this.createTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }
  
  handleChange(event) {
    const { value } = event.target
    this.setState({ userInput: value })
  }
  
  handleSubmit(event) {
    event.preventDefault()
    this.createTodo()
    this.setState({ userInput: "" })
    event.target.reset()
  }

  createTodo() {
    const copyOfTodosState = [...this.state.todos]
    const newTodo = {}
    const timestamp = Date.now()
    newTodo.id =`task-${timestamp}`
    newTodo.task = this.state.userInput
    copyOfTodosState.push(newTodo)
    this.setState({ todos: copyOfTodosState })
  }

  deleteTodo(index) {
    const copyOfTodosState = [...this.state.todos]
    const indexToDelete = copyOfTodosState.findIndex(item => item.id === index)
    copyOfTodosState.splice(indexToDelete, 1)
    this.setState({ todos: copyOfTodosState });
  }

  render() {
    return (
      <div className="App">
        <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} userInput={this.state.userInput}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
