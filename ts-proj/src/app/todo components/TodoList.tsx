import { useAppSelector } from '@/redux/hooks'
import React from 'react'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {

    const { todos } = useAppSelector(state => state.todo)

  return (
    <ul>
        {
            todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            ))
        }
    </ul>
  )
}

export default TodoList