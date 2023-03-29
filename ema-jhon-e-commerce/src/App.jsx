import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Product from './components/Product/Product'

function App() {
 
  return (
    <div className="App">
     <Header></Header>
     <Shop></Shop>
     {/* <Product></Product> */}
    </div>
  )
}

export default App
