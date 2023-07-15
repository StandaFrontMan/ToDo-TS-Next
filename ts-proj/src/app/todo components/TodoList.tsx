import { useAppSelector } from '@/redux/hooks'
import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {

    const { todos } = useAppSelector(state => state.todo)

    const [filter, setFilter] = useState<'completed' | 'uncompleted' | 'all'>('all'); // фильтрация

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
    <div className='output-area'>
      <div className='filter-buttons-block'>
        <button className='filter-button' onClick={() => setFilter('completed')}>Show Complited Todos</button>
        <button className='filter-button' onClick={() => setFilter('uncompleted')}>Show Uncomplited Todos</button>
        <button className='filter-button' onClick={() => setFilter('all')}>Show All Todos</button>
      </div>
      <div className='todo-list-block'>
        <ul>
            {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList