
import socketIOClient from "socket.io-client";
import { store } from "../index"
import { actionTickers } from '../actions/index'

const initialState = [
    {
        change: "135.39",
        change_percent: "0.19",
        dividend: "0.16",
        exchange: "NASDAQ",
        last_trade_time: "2021-06-05T09:40:16.000Z",
        price: "107.09",
        ticker: "GOOGL",
        yield: "1.78",
    },
    {
        change: "135.39",
        change_percent: "0.19",
        dividend: "0.16",
        exchange: "NASDAQ",
        last_trade_time: "2021-06-05T09:40:16.000Z",
        price: "107.09",
        ticker: "GOOGL",
        yield: "1.78",
    },
    {
        change: "135.39",
        change_percent: "0.19",
        dividend: "0.16",
        exchange: "NASDAQ",
        last_trade_time: "2021-06-05T09:40:16.000Z",
        price: "107.09",
        ticker: "GOOGL",
        yield: "1.78",
    },
    {
        change: "135.39",
        change_percent: "0.19",
        dividend: "0.16",
        exchange: "NASDAQ",
        last_trade_time: "2021-06-05T09:40:16.000Z",
        price: "107.09",
        ticker: "GOOGL",
        yield: "1.78"
    },
    {
        change: "135.39",
        change_percent: "0.19",
        dividend: "0.16",
        exchange: "NASDAQ",
        last_trade_time: "2021-06-05T09:40:16.000Z",
        price: "107.09",
        ticker: "GOOGL",
        yield: "1.78"
    },
    {
        change: "135.39",
        change_percent: "0.19",
        dividend: "0.16",
        exchange: "NASDAQ",
        last_trade_time: "2021-06-05T09:40:16.000Z",
        price: "107.09",
        ticker: "GOOGL",
        yield: "1.78"
    },
]

export function tickerReducer(state = {}, action) {
    if (action.type === 'TICKERS') {
        return {
            ...state, tickers: action.tickers, prev: state.tickers || initialState
        }
    }
    if (action.type === 'DISCONNECT') {
        socket.emit('start')
        socket.disconnect()
    }
    if (action.type === 'GO') {
        socket.connect();
        socket.emit('start')
        return { ...state, tickers: action.tickers, prev: state.tickers || initialState }
    }
    return state;


}

const socket = socketIOClient("http://127.0.0.1:4000");
socket.emit('start')
socket.on('ticker', (tickers) => store.dispatch(actionTickers(tickers)))

