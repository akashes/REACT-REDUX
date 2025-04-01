import { combineReducers } from "redux";
import pizzaReducer from './pizza/PizzaReducers'
import burgerReducer from './burger/burgerReducer'
import productReducer from './products/productReducer'

export const rootReducer=combineReducers({pizza:pizzaReducer,burger:burgerReducer,products:productReducer})