import { useState } from 'react'
import Header from './components/header'
import Card from './components/card'
import Collection from './components/collections'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Collection />
    </div>
  )
}

export default App
