import React from 'react'
import { ITodo, markAsDone, removeTode } from '@/redux/features/todo.Slice'
import { useAppDispatch } from '@/redux/hooks'

interface TodoItemProps extends ITodo {
  className: 'light' | 'dark';
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, complited, className }) => {

    const dispatch = useAppDispatch()

  return (
    <li className={`todo-info ${className}`}>
        <input
            className='checkbox-condition'
            type='checkbox'
            checked={complited}
            onChange={() => dispatch(markAsDone(id))}
        />
        <span style={{ textDecoration: complited ? 'line-through' : 'none' }} className='todo-text'>{text}</span> 
        <button className='delete-button' onClick={() => dispatch(removeTode(id))}>Delete</button>
    </li>
  )
}

export default TodoItem

// текст в спане зачеркивает тернальный оператор 