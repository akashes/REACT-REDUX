import { ORDER_BURGER } from "./burgerTypes"

export const orderBurger=(count)=>{
    return{
        type:ORDER_BURGER,
        payload:count
    }
}