import { useState } from 'react'
// import './App.css'
import CardGrid from './component/dev';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CardGrid />
       </div>
    </>
  )
}

export default App
