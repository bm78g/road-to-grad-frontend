import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import NodeGraph from './components/Graph/Graph'
import csLogo from './assets/pc-logo-placeholder.png'
import getPathTo from './utils/graph/getRequirementPath'

function App() {
  const baseUrl = 'http://localhost:3001/api/catalog/cs'
  const [csGraph, setCsGraph] = useState()

  const csHomeGraph = [
    {
      id: 'major',
      name: 'Major Requirements',
      requirement: {},
      edges: [],
      dist: 0,
      showId: false
    },
    {
      id: 'tech',
      name: 'Technical Electives',
      requirement: {},
      edges: [],
      dist: 0,
      showId: false
    }
  ]

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
          <NodeGraph nodes={csHomeGraph} />
        </div>
      ) : (
        'Loading...'
      )}
    </>
  )
}

export default App
