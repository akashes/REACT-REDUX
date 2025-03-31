import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderPizza } from '../redux'

const PizzaBox = () => {
  const pizzaBase =useSelector(state=>state.pizza.pizzaBase)
  const dispatch = useDispatch() // returns a ref to the dispatch function in the store
  const [selectedCount,setSelectedCount]=useState("")
  console.log(selectedCount)

  return (
    <div className="container">
    <h2 className="text">Number of Pizza Base Available - {pizzaBase}  </h2>
    <div style={{display:'flex',}}>
    <select value={selectedCount} name="" id="" onChange={(e)=>setSelectedCount(e.target.value)}>
      <option disabled selected value="">Select Count</option>
      <option value="1" className="value">1</option>
      <option value="2" className="value">2</option>
      <option value="3" className="value">3</option>
      <option value="4" className="value">4</option>
      <option value="5" className="value">5</option>
    </select>
    <button  className="btn" onClick={()=>{
      selectedCount ?dispatch(orderPizza(Number(selectedCount))) : dispatch(orderPizza())
    }}>Order Pizza</button>
    
    </div>
  </div> 
  )
}


export default  PizzaBox
