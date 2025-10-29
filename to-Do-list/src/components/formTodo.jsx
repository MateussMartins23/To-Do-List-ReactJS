import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setcategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;

    console.log(value, category)
    addTodo(value, category)
    setValue("")
    setcategory("")

  }

  return (
    <div className='Todo-Form'>
      <h1>Criar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <div className='botoesForm'>
          <div className='Titulo'>
            <label >Digite a Tarefa</label>
          <input value={value} type="text" placeholder='Digite a nova Tarefa' onChange={(e) => setValue(e.target.value)} />
          </div>  
          <div className='Categorias'>
          <label>Categoria</label>
          <select value={category} className='Categoria' onChange={(e) => setcategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Saúde">Saúde</option>
            <option value="Pessoal">Pessoal</option>
          </select>
          </div>
          <div className='Datas'>

              <div className='DataInicio'>
              <label>Data de Inicio</label>
              <input className='datai' type="date" />
              </div>

              <div className='DataFinal'>
                <label >Data de Término</label>
                <input className='dataf' type='date' />
              </div>
            
          </div>


          <button className='submit' type='submit'>Criar Tarefa</button>

        </div>
      </form>

    </div>
  );
};

export default TodoForm