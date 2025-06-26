import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchAllData from './Component/Introduction/FetchData'
import FetchTrial from './Component/Introduction/FetchTrial'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Component/Pages/Homepage'
import UsersDetails from './Component/Users/UsersDetails'
import Signup from './Component/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/Users/:id' element={<UsersDetails/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>



      </Routes>
      
    </div>
  )
}

export default App
