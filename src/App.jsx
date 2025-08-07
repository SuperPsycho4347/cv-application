import { useState } from 'react'
import './App.css'
import General from './components/General'
import Input from './components/Input'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    mail: '',
    phone: ''
  })

  function handleNameChange(e) {
    setGeneralInfo({...generalInfo, name: e.target.value})
  }

  function handleMailChange(e) {
    setGeneralInfo({...generalInfo, mail: e.target.value})
  }

  function handlePhoneChange(e) {
    setGeneralInfo({...generalInfo, phone: e.target.value})
  }

  return (
    <General
    generalInfo={generalInfo}
    handleNameChange={handleNameChange}
    handleMailChange={handleMailChange}
    handlePhoneChange={handlePhoneChange}
    />
  )
}

export default App
