import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderPizza } from '../redux'

const PizzaBox = () => {
  const pizzaBase =useSelector(state=>state.pizza.pizzaBase)
  const dispatch = useDispatch() // returns a ref to the dispatch function in the store

  return (
    <div className="container">
    <h2 className="text">Number of Pizza Base Available - {pizzaBase}  </h2>
    <button  className="btn" onClick={()=>dispatch(orderPizza())}>Order Pizza</button>
  </div> 
  )
}


export default  PizzaBox
