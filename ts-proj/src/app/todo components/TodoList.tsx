import { useAppSelector } from '@/redux/hooks'
import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {

    const { todos } = useAppSelector(state => state.todo)

    const [filter, setFilter] = useState<'completed' | 'uncompleted' | 'all'>('all');

    const filteredTodos = todos.filter((todo) => { // реализация фильтрации по кретерию condition
        if (filter === 'completed') {
          return todo.complited;
        } else if (filter === 'uncompleted') {
          return !todo.complited;
        } else {
          return true; 
        }
      });
    
  return (
    <div>
      <button onClick={() => setFilter('completed')}>Show Complited Todos</button>
      <button onClick={() => setFilter('uncompleted')}>Show Uncomplited Todos</button>
      <button onClick={() => setFilter('all')}>Show All Todos</button>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList