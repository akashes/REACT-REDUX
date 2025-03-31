import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { orderBurger } from '../redux'
import { connect } from 'react-redux'

const BurgerBox = (props) => {
    console.log(props)
    console.log(props.burgerBase)
    // const dispatch = useDispatch()
    // const state = useSelector((state)=>state.burger)
    // console.log(state)
    const[selectedCount,setSelectedCount]=useState("")
    
  return (
    <div>
       <div className="container">
          <h2 className="text">Number of Burger Base Available 
            - {props.burgerBase}
            </h2>
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
              selectedCount ?props.orderBurger(Number(selectedCount)) : props.orderBurger()
            }}>Order Burger</button>
            
            </div>
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
       orderBurger:(count)=> dispatch(orderBurger(count))

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (BurgerBox)
