import { useState } from 'react'

import './App.css'
import PizzaBox from './components/PizzaBox'
import BurgerBox from './components/BurgerBox'
import Products from './components/Products'
function App() {

  return (
    <>
   <PizzaBox/>
   <BurgerBox/>
   <Products/>
    </>
  )
}

export default App
