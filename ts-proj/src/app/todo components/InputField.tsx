import { useAppDispatch, } from '@/redux/hooks'
import React from 'react'
import { addTodo } from '@/redux/features/todo.Slice'

interface InputFieldProps {
    value: string;
    updateText: (text: string) => void;
    theme: 'light' | 'dark'
}


const InputField: React.FC<InputFieldProps> = ({ value, updateText, theme }) => {

    const dispatch = useAppDispatch()

    const handleAddTodo = () => { // проверка на пустой инпут
      if (value.trim() !== '') {
        dispatch(addTodo(value));
        updateText('');
      }
    };

  return (
    <div className={`input-area ${theme}`}>
        <input
            className={`main-input ${theme}`}
            placeholder='Type...'
            value={value}
            onChange={(e) => updateText(e.target.value)}
        />
        <button
          className={`adding-button ${theme}`}
          onClick={handleAddTodo}
        >Add ToDo</button>
    </div>
  )
}

export default InputField