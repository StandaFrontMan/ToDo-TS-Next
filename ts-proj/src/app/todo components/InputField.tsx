import { useAppDispatch, } from '@/redux/hooks'
import React from 'react'
import { addTodo } from '@/redux/features/todo.Slice'

interface InputFieldProps {
    value: string;
    updateText: (text: string) => void
}


const InputField: React.FC<InputFieldProps> = ({ value, updateText }) => {

    const dispatch = useAppDispatch()

    const handleAddTodo = () => { // проверка на пустой инпут
      if (value.trim() !== '') {
        dispatch(addTodo(value));
        updateText('');
      }
    };

  return (
    <div className='input-area'>
        <input
            className='main-input'
            placeholder='Type...'
            value={value}
            onChange={(e) => updateText(e.target.value)}
        />
        <button
          className='adding-button'
          onClick={handleAddTodo}
        >Add ToDo</button>
    </div>
  )
}

export default InputField