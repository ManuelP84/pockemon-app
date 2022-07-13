//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PockemonList from './components/PockemonList'
import Favorites from './components/Favorites'
import Login from './components/Login'
import PockemonFilter from './components/PockemonFilter'
import PockemonCard from './components/PockemonCard'
import PockemonDetail from './components/PockemonDetail'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Login/>
      <PockemonFilter/>      
      <PockemonList/>
      <PockemonDetail/>
      <Favorites/>
      <PockemonCard/>
    </div>
  )
}

export default App
