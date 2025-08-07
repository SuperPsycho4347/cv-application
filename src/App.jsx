import { useState } from 'react'
import './App.css'
import General from './components/General'
import Input from './components/Input'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <General/>
  )
}

export default App
