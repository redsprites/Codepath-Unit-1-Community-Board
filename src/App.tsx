import { useState } from 'react'
import Navbar from './components/Navbar';
import EventsBoard from './components/EventsBoard';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar />
    <EventsBoard/>
  </div>
  )
}

export default App
