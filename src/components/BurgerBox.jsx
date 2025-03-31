import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { orderBurger } from '../redux'
import { connect } from 'react-redux'
const BurgerBox = (props) => {
    console.log(props)
    console.log(props.burgerBase)
    // const dispatch = useDispatch()
    // const state = useSelector((state)=>state.burger)
    // console.log(state)
    
  return (
    <div>
       <div className="container">
          <h2 className="text">Number of Burger Base Available 
            - {props.burgerBase}
            </h2>
          <button 
          onClick={()=>props.orderBurger()}
           className="btn">Order Burger</button>
        </div> 
    </div>
  )
}
//maps redux state to props
const mapStateToProps=(state)=>{
    return{
       burgerBase:state.burger.burgerBase
    }
}

//helps to maps action creators to a prop in a component
const mapDispatchToProps=(dispatch)=>{
    return{
       orderBurger:()=> dispatch(orderBurger())

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (BurgerBox)
