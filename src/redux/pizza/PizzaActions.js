import { ORDER_PIZZA } from "./PizzaTypes";

export const orderPizza=(count)=>{
    return{
        type:ORDER_PIZZA,
        payload:count
    }
}