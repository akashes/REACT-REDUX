import { ORDER_PIZZA } from "./PizzaTypes"

const initialState ={
    pizzaBase:100
}


 const reducer=(state=initialState,action)=>{
    switch(action.type){

        case ORDER_PIZZA:
            console.log(action.payload)
            return action.payload ?     {...state,pizzaBase:state.pizzaBase-action.payload} :{...state,pizzaBase:state.pizzaBase-1}

            default:
                return state
    }

}

export default reducer