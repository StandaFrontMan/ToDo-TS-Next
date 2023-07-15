"use client";

import Image from 'next/image'
import InputField from './todo components/InputField'
import { useState } from 'react'
import TodoList from './todo components/TodoList';

import styles from './page.module.css'


export default function Home() {

  const [text, setText] = useState<string>('');

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`Home ${theme}`}>

      <button className="theme-button" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <InputField
        value={text}
        updateText={setText}
        theme={theme}
      />
      <TodoList theme={theme}/>
    </div>
  )
}
