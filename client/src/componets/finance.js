import './finance.css'
import { connect } from 'react-redux';
import { actionGO, actionStop } from '../store/actions';

export const Content = ({ dataTickers, prevTickers, stopTickers, goTickers }) => {

    return (
        <>
            <div className="ticker-list">
                {
                    dataTickers && dataTickers.map((tickers, index) =>
                        <div className="ticker" key={index}>
                            <div className="ticker-name">{tickers.ticker}</div>
                            <div className="echange">{tickers.exchange}</div>
                            <div className="price" style={tickers.price >= prevTickers[index].price ? { color: "green" } : { color: "red" }}>{tickers.price >= prevTickers[index].price ? `Price: \u2191 ${tickers.price} $` : `Price: \u2193 ${tickers.price} $`}</div>
                            <div className="change-percent" style={tickers.change_percent >= prevTickers[index].change_percent ? { color: "green" } : { color: "red" }}>{`${tickers.change_percent}%`}</div>
                            <div className="dividend" style={tickers.dividend >= prevTickers[index].dividend ? { color: "green" } : { color: "red" }}>{tickers.dividend >= prevTickers[index].dividend ? `+${tickers.dividend} $` : `-${tickers.dividend} $`}</div>
                            <div className="yield" style={tickers.yield >= prevTickers[index].yield ? { color: "green" } : { color: "red" }}>{`Yield : ${tickers.yield}`}</div>
                            <div className="time-trade">{`${new Date(tickers.last_trade_time).getHours().toString().padStart(2, "0")}:${new Date(tickers.last_trade_time).getMinutes().toString().padStart(2, "0")}:${new Date(tickers.last_trade_time).getSeconds().toString().padStart(2, "0")}`}</div>
                        </div>
                    )}
            </div>
            <button onClick={() => stopTickers()} >STOP</button>
            <button onClick={() => goTickers()}>GO</button>
        </>
    )
}

export const CContent = connect(s => ({ dataTickers: s && s.tickers.tickers, prevTickers: s && s.tickers.prev }), { stopTickers: actionStop, goTickers: actionGO })(Content)
