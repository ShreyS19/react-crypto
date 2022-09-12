import React from "react";
import "./Coin.css";

const Coin = (coins) => {
  const { coin } = coins;
  const { id, image, name, current_price, market_cap, last_updated, ath, atl } =
    coin;
  let date = new Date(last_updated).toLocaleDateString();
  return (
    <div
      className="col-lg-3 col-md-3 col-sm-4 col-xs-1"
      style={{ height: "100%" }}
    >
      <div className="card coin-card">
        <img src={image} className="card-img-top coin-img" alt="..." />
        <div className="card-body coin-Body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Current Price : {current_price}</p>
          <p className="card-text">
            <span className="all-time-price">ATH : </span>&nbsp;{ath}
          </p>
          <p className="card-text">
            <span className="all-time-price">ATL :</span>&nbsp;{atl}
          </p>
          <p className="card-text market-cap">
            Market Cap : {market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
