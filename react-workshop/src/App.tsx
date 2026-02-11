import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card.tsx'
import Hearts from './Hearts.tsx'
import XOXO from './XOXO.tsx'
import './App.css'

function App() {
  return (
    <>
      <Card/>
      <Hearts/>
      <XOXO/>
      <Hearts/>
    </>
  )
}

export default App
