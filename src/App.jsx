import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
import RandomNum from './components/RandomNum/RandomNum'

function App() {
  const [viewComponent, setViewComponent] = useState('project1')

  return (
    <>
      <header>
        <div>
          <h1 className='title'>React App</h1>
          <h3>useState Projects</h3>
        </div>

        <div className='sections'>
          <div className='card card-1'>
            <h3>Project 1</h3>
            <h4>Counter App</h4>
            <button className="btn" onClick={() => setViewComponent('project1')}>View</button>
          </div>
          <div className='card card-2' >
            <h3>Project 2</h3>
            <h4>Random Number Generator</h4>
            <button className="btn" onClick={() => setViewComponent('project2')}>View</button>

          </div>
        </div>
      </header>
      <main>
        <div className="projects">
          {viewComponent === 'project1' && <Counter />}
          {viewComponent === 'project2' && <RandomNum />}
        </div>
      </main>
    </>
  )
}

export default App
