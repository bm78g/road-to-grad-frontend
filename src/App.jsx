import './App.css'
import CSGraph from './components/CSHome/CSGraph'
import rtgLogo from './assets/roadtograd-logo.png'
import csLogo from './assets/question-logo.png'

function App() {
  return (
    <>
      <div className='header-container'>
        <div className='header-content'>
          <img src={ rtgLogo } className='rtg-logo'></img>
        </div>
        <hr></hr>
      </div>
      <div className='graph-header'>
        <h1>Computer Science Catalog</h1>
        <div className='tooltip'>
          <img src={ csLogo } className='tip-logo'></img>
          <div className='tip-bubble'>
            <h1>Keep Note:</h1>
            <p>Cross-listed courses are omitted, IE: CS 3345 vs CE 3345</p>
          </div>
        </div>
      </div>
      <CSGraph />
    </>
  )
}

export default App
