import { useState } from 'react'
import Pokegame from './components/Pokegame'
import './App.css'
import Pokedex from './components/Pokedex'



function App() {
  const [count, setCount] = useState(0)

  return (
      <Pokegame/>
  )
}

export default App
