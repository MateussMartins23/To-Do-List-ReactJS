import React from 'react';


const Todo = ({todo,deletarTodo,completeTodo}) => {

  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : "",opacity: todo.isCompleted ? 0.5:1}}>
      <div className='content'>
        <p>{todo.text} <button onClick={()=>deletarTodo(todo.id)} >x</button>   <button onClick={()=>completeTodo(todo.id)}>Completar</button></p>
        <p className='category'>({todo.category})</p>
      </div>
      <div >

      </div>
    </div> 
  )
}

export default Todo