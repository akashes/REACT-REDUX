import { combineReducers } from "redux";
import pizzaReducer from './pizza/PizzaReducers'
import burgerReducer from './burger/burgerReducer'
export const rootReducer=combineReducers({pizza:pizzaReducer,burger:burgerReducer})