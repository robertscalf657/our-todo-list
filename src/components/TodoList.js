import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {

const todos = useSelector((state) => state.todos)

  return (
    <section className="mx-auto min-w-full px-10 pb-12 space-y-3">
        {todos.map(({id, text, completed}) => (
          <TodoItem key={id} text={text} completed={completed}/>
        ))}
      </section>
  )
}

export default TodoList