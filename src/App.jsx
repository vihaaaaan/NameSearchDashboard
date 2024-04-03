import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState("")
  const url = `https://api.agify.io?name=${name}`

  const handleSubmit = (e) => {
    e.preventDefault()


    axios.get(url).then(() => console.log("WORKING")).catch(() => console.log("NOT WORKING"))
  }

  return (
    <>
      <h1>Name Search Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input value={name} onChange={e => (setName(e.target.value))}></input>
        <div>
          <button>Search</button>
        </div>
      </form>
    </>
  )
}

export default App
