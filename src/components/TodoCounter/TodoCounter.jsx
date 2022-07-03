import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import './TodoCounter.css'

function TodoCounter({ total, completed}) {
  const { totalTodos, completedTodos } = useContext(TodoContext)
  return (
    <h2 className="TodoCounter">
      Has compleado {completedTodos} de {totalTodos} TODOS
    </h2>
  )
}

export { TodoCounter };