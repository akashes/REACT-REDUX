import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./productActionTypes"


export const fetchRequest=()=>{
    return{
        type:FETCH_REQUEST

    }
}
export const fetchSuccess=(products)=>{
    console.log(products)
    return{
        type:FETCH_SUCCESS,
        payload:products

    }
}
export const fetchError=(msg)=>{
    return{
        type:FETCH_ERROR,
        payload:msg

    }
}



export const fetchProducts=()=>{
    return function(dispatch){
        dispatch(fetchRequest())
        //api call
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data =>{ 
    if(data){
    
        dispatch(fetchSuccess(data))
    }

        
    
} )
  .catch((err)=>{
    dispatch(fetchError(err.message))

  })

    }
}