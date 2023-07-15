"use client";

import Image from 'next/image'
import styles from './page.module.css'
import InputField from './todo components/InputField'
import { useState } from 'react'
import TodoList from './todo components/TodoList';

export default function Home() {

  const [text, setText] = useState<string>('');

  return (
    <div className='Home'>
      <InputField
        value={text}
        updateText={setText}
      />
      <TodoList />
    </div>
  )
}
