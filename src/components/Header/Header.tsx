import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className='logo'>Seek&Find</div>
      <div className='timer'></div>
      <div className='target'></div>
    </header>
  )
}