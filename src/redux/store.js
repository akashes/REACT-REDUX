import { createStore } from "redux";
import { rootReducer } from "./combineReducers";
import { applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import { createLogger } from "redux-logger";
const logger = createLogger()
import { composeWithDevTools } from 'redux-devtools-extension';



export const store = createStore(rootReducer,
    composeWithDevTools(

        applyMiddleware(thunk,logger)
    )
)