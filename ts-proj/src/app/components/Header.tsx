import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <Link href='/'>ToDo</Link>
        <Link href='/instructions'>Instructions</Link>
    </header>
  )
}

export default Header