import { tickerReducer } from './index'
import { actionTickers } from '../actions'

describe('tickerReducer', () => {
    it('TICKERS', () => {
        expect(
            tickerReducer({}, {
                type: actionTickers.type
            })
        ).toEqual({
            tickres: actionTickers.tickers
        })
    })
})