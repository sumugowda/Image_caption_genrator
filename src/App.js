import React from 'react'
import Navbar from './components/Navbar'
import Preview from './components/Preview'

function App() {
  return (
    <div className='bg-neutral-900 h-screen py-6 text-rose-500 overflow-hidden'>
      <Navbar /> 
      <Preview />
    </div>
  )
}

export default App
