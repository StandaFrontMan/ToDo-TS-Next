import { useAppDispatch, } from '@/redux/hooks'
import React from 'react'
import { addTodo } from '@/redux/features/todo.Slice'

interface InputFieldProps {
    value: string;
    updateText: (text: string) => void
}


const InputField: React.FC<InputFieldProps> = ({ value, updateText }) => {

    const dispatch = useAppDispatch()

    const handleAddTodo = () => {
      if (value.trim() !== '') {
        dispatch(addTodo(value));
        updateText('');
      }
    };

  return (
    <div>
        <input
            placeholder='Type...'
            value={value}
            onChange={(e) => updateText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Too</button>
    </div>
  )
}

export default InputField