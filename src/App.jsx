import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(!isSubmit);
  }

  return (
    <div >
      {/* <General 
        handleSubmit={handleSubmit}
        isSubmit={isSubmit}
       /> */}
       {/* <Education
        handleSubmit={handleSubmit}
        isSubmit={isSubmit}
       /> */}
       <Experience
        handleSubmit={handleSubmit}
        isSubmit={isSubmit}
       />
    </div>
  )
}

export default App
