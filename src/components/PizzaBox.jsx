import React from 'react'
import { orderPizza } from '../redux'
import { connect } from 'react-redux'
const PizzaBox = (props) => {
  console.log(props)
  return (
    <div className="container">
    <h2 className="text">Number of Pizza Base Available -{props.pizzaBase} </h2>
    <button onClick={props.orderPizza} className="btn">Order Pizza</button>
  </div> 
  )
}

const mapStateToProps=(state)=>{
  return{

    pizzaBase : state.pizza.pizzaBase
  }


}
const mapDispatchToProps=(dispatch)=>{
  return{
    orderPizza:()=>dispatch(orderPizza())
  }

}
export default connect(mapStateToProps,mapDispatchToProps) (PizzaBox)
