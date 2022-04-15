import { useState } from 'react'
import Header from './components/header'
import Card from './components/card'
import Collection from './components/collections'
import Products from './components/product'
import Spotlight from './components/spotlight'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Collection />
      <Products />
      <div className="discover" style={{ backgroundImage: `url("http://placekitten.com/g/700")` }}>
        <span className="discover__line" />
        <p>NEW TO CUSTOM WORKS</p>
        <h4>Discover our new products</h4>
      </div>
      <Spotlight />
      <Footer />
    </div>
  )
}

export default App
