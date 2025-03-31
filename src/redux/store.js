import { createStore } from "redux";
import { rootReducer } from "./combineReducers";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
const logger = createLogger()


export const store = createStore(rootReducer,applyMiddleware(logger))