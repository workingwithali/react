import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>This is count {count}</div>
      <button onClick={()=>{setCount(count+1)}}>update count</button>
    </>
  )
}

export default App
