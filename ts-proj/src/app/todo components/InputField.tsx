import { useAppDispatch, } from '@/redux/hooks'
import React from 'react'
import { addTodo } from '@/redux/features/todo.Slice'

interface InputFieldProps {
    value: string;
    updateText: (text: string) => void
}


const InputField: React.FC<InputFieldProps> = ({ value, updateText }) => {

    const dispatch = useAppDispatch()

  return (
    <div>
        <input
            placeholder='Type...'
            value={value}
            onChange={(e) => updateText(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo(value))}>Add Too</button>
    </div>
  )
}

export default InputField