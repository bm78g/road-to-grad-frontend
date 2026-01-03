import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import CSGraph from './components/CSHome/CSGraph'
import csLogo from './assets/pc-logo-placeholder.png'

function App() {
  const baseUrl = 'http://localhost:3001/api/catalog/cs'
  const [csGraph, setCsGraph] = useState()

  useEffect(() => {
    axios.get(baseUrl).then(res => {
      setCsGraph(res.data)
    })
  }, [])

  return (
    <>
      <div className='header-container'>
        <div className='header-content'>
          <img src={csLogo} className='cs-logo'></img>
          <h1>Computer Science Catalog</h1>
        </div>
        <hr></hr>
      </div>
      {csGraph ? (
        <div id='graph-container'>
          <CSGraph />
        </div>
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default App
