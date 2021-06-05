import {actionTickers} from '../actions'

describe('actionTickers', () => {
    it('should create an action to add', () => {
        const tickers = {tickers: []}
        const expectedAction = {
            type: "TICKERS",
            tickers: tickers
        }
        expect(actionTickers(tickers)).toEqual(expectedAction)
    })
})