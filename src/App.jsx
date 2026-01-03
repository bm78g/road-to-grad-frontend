import './App.css'
import CSGraph from './components/CSHome/CSGraph'
import csLogo from './assets/pc-logo-placeholder.png'

function App() {
  return (
    <>
      <div className='header-container'>
        <div className='header-content'>
          <img src={csLogo} className='cs-logo'></img>
          <h1>Computer Science Catalog</h1>
        </div>
        <hr></hr>
      </div>
      <CSGraph />
    </>
  )
}

export default App
