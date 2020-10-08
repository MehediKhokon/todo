import React, { useState } from 'react'
import './todo.css'

function Todo({ todo, index, completeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}
      className='todo'
    >
      {todo.text}
      <div>
        {todo.isComplete ? (
          ''
        ) : (
          <button onClick={() => completeTodo(index)}>complete</button>
        )}
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        placeholder='todo'
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}

function TodoComponent() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn react',
      isComplete: false,
    },
    {
      text: 'learn Django',
      isComplete: false,
    },
  ])

  const addTodo = (text) => {
    const NewTodos = [...todos, { text }]
    setTodos(NewTodos)
  }

  const completeTodo = (index) => {
    const NewTodos = [...todos]
    NewTodos[index].isComplete = true
    setTodos(NewTodos)
  }
  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default TodoComponent
