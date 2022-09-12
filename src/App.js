import "./App.css";
import Coin from "./Coin";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState();
  const [allCoins, setAllCoins] = useState();
  const [searchCoin, setSearchCoin] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((resp) => {
        setCoins(resp.data);
        setAllCoins(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (searchCoin !== "") {
      let filteredCoins = allCoins.filter((coin) => {
        console.log(
          coin.name.toLowerCase().startsWith(searchCoin.toLowerCase())
        );
        return coin.name.toLowerCase().startsWith(searchCoin.toLowerCase());
      });
      // console.log(filteredCoins, searchCoin);
      setCoins(filteredCoins);
    } else {
      setCoins(allCoins);
    }
  }, [searchCoin]);

  const searchHandler = (e) => {
    setSearchCoin(e.target.value);
  };

  return (
    <div className="App">
      <div>
        Search here :{" "}
        <input className="search-coins" onChange={searchHandler} />
      </div>
      <div className="row">
        {coins?.length ? (
          coins?.map((coin) => {
            return <Coin key={coin.id} coin={coin} />;
          })
        ) : (
          <div className="col-12 text-center">No Results Found</div>
        )}
      </div>
    </div>
  );
}

export default App;
