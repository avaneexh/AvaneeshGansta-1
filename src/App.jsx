import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordian from './components/accodian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <Accordian/>

    </div>
    </>
  )
}

export default App
