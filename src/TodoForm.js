import React from 'react';

function TodoForm (props) {
  return (
    <div className="todoList">
      <form onSubmit={props.handleSubmit}> 
        <input type="text" value={props.userInput} placeholder="something to do" name="todos" onChange={props.handleChange}/>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default TodoForm;