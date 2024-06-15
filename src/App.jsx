import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Header } from './Components/Header/Header'
import { Sidebar } from './Components/Sidebar/Sidebar'
import { Overview } from './Components/Overview/Overview'

function App() {
  return (
    <div className='w-[100vw] h-[100vh] grid grid-cols-8 grid-rows-10'>
      <Sidebar/>
      <Header/>
      <Overview/>     
    </div>
  )
}

export default App
