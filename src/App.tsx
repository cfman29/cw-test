import { useState } from 'react'
import Header from './components/header'
import Card from './components/card'
import Collection from './components/collections'
import Products from './components/product'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Collection />
      <Products />
      <Footer />
    </div>
  )
}

export default App
