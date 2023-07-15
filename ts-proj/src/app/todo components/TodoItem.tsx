import React from 'react'
import { ITodo, markAsDone, removeTode } from '@/redux/features/todo.Slice'
import { useAppDispatch } from '@/redux/hooks'

const TodoItem: React.FC<ITodo> = ({ id, text, complited }) => {

    const dispatch = useAppDispatch()

  return (
    <li className='todo-info'>
        <input
            className='checkbox-condition'
            type='checkbox'
            checked={complited}
            onChange={() => dispatch(markAsDone(id))}
        />
        <span className='todo-text'>{text}</span>
        <button className='delete-button' onClick={() => dispatch(removeTode(id))}>Delite</button>
    </li>
  )
}

export default TodoItem