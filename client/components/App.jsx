import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

function App (props) {
  return (
    <>
      <div className='title'>
        Xbox Friday Project App
      </div>
      <div className='main'>
        <Route exact path='/' component={Home} />
      </div>
    </>
  )
}

export default App
