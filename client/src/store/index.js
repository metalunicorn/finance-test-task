import { createStore, applyMiddleware, combineReducers } from 'redux';
import { tickerReducer, } from "./reducers/index";
import thunk from 'redux-thunk';


let store = createStore(combineReducers({
    tickers: tickerReducer,
}), applyMiddleware(thunk))



export { store };