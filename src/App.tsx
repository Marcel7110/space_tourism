import { useState } from 'react'
import type { Page } from './types'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Technology from './pages/Technology'
import Crew from './pages/Crew'

import data from './data/data.json'

function App() {
  const [currentPage,setCurrentPage] = useState<Page>(1)
  const classes = ['home','destination','crew','technology']

  return (
    <div className={`app ${classes[currentPage-1]}`}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <main>
        { currentPage === 1 && <Home/> }
        { currentPage === 2 && <Destination destinations={data.destinations}/> }
        { currentPage === 3 && <Crew crew={data.crew}/> }
        { currentPage === 4 && <Technology technology={data.technology}/> }
      </main>
    </div>
  )
}

export default App
