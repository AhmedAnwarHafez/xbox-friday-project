import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

function App (props) {
  return (
    <>
      <header className='md:flex justify-between container mx-auto p-4 bg-blue-100'>
        <h1 className='text-6xl text-black-300 font-bold'>The Gaming Database</h1>
      </header>
      <div className='md:flex justify-between container mx-auto p-4'>
        <Route exact path='/' component={Home} />
      </div>
    </>
  )
}

export default App
