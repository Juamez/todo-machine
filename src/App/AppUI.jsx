import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoCounter } from '../components/TodoCounter/TodoCounter'
import { TodoSearch } from '../components/TodoSearch/TodoSearch'
import { TodoList } from '../components/TodoList/TodoList'
import { TodoButton  } from '../components/TodoButton/TodoButton'
import { TodoItem } from '../components/TodoItem/TodoItem'
import { TodoForm } from '../components/TodoForm/TodoForm'
import { Modal } from '../Modal'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Ooops!! Parece que hubo un error....</p>}
        {loading && <p>Estamos cargando, espera un momento...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p> }
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoButton 
        setOpenModal={setOpenModal}
      />
    </>
  )
}

export { AppUI }