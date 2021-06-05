
export const actionTickers = (tickers) => ({ type: "TICKERS", tickers: tickers})
export const actionStop = () => ({type: 'DISCONNECT'})
export const actionGO = () => ({type: 'GO'})