import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux'
const Products = () => {
    const state = useSelector(state=>state.products)
    console.log(state)
    console.log(state.error)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())

    },[])
  return (
    <div>
        {
            state.loading && <p>Loading...</p>
        }
        {
            state?.products?.length>0 && state.products.map((item)=>{
               return <p>{item.title}</p>
            })
        }
      
      {
        state.error && <p>Error : {JSON.stringify(state.error)}  </p>
      }
    </div>
  )
}

export default Products
