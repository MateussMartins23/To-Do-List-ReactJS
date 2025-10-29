import { useState } from 'react'
import "./App.css"
import Todo from './components/Todo'
import NavBar from "./components/navbar"
import TodoForm from "./components/formTodo"


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Testando os conhecimentos",
      category: "Estudos",
      isCompleted: false,
    },

    {
      id: 2,
      text: "Buscar trabalho ",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir a academia",
      category: "Saúde",
      isCompleted: false,
    },
    {
      id: 5,
      text: "Estudar",
      category: "Estudos",
      isCompleted: false,
    }
  ])


  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    newTodos.sort((a, b) => a.isCompleted - b.isCompleted)
    setTodos(newTodos)
  }

  const deletarTodo = (id) => {
    const newTodos = [...todos]
    const updatedTodo = newTodos.filter(todo => todo.id !== id ? todos : null);
    setTodos(updatedTodo);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo)

    newTodos.sort((a, b) => a.isCompleted - b.isCompleted)
    setTodos(newTodos)
  }
  const ActiveTodos = todos.filter((todo) => !todo.isCompleted)
  const CompleteTodos = todos.filter((todo) => todo.isCompleted)

  return (

    <div className='app'>
        
        <div className='Formulario'>
          <TodoForm addTodo={addTodo} />
        </div>
      
        <div className='todo-list'>
          <h1>Lista de Tarefas</h1>
          {ActiveTodos.length > 0 ? ActiveTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deletarTodo={deletarTodo}
              completeTodo={completeTodo} />
          ))
            : (<p>Nehnuma Tarefa Pendente</p>)}
        </div>

        <div className='Complete-Todo'>
          <h1>Tarefas Completas</h1>
          {CompleteTodos.length > 0 ? (CompleteTodos.map((todo) => (

            <Todo
              key={todo.id}
              todo={todo}
              deletarTodo={deletarTodo}
              completeTodo={completeTodo} />))
          ) : (<p>Nenhuma Tarefa Completa</p>)}
        </div>


    </div>
  );
}

export default App
