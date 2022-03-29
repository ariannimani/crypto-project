import Dashboard from "./pages/Dashboard/Dashboard";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [dataBinance, setDataBinance] = useState([]);
  const [dataKuCoin, setDataKuCoin] = useState([]);
  const urlLink = "https://crypto-scrapper--app.herokuapp.com/crypto/today";

  async function getData() {
    try {
      const response = await fetch(urlLink, {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result) {
        setData(result);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const newBinanceData = data.map((item) => item.binance_coins);
    setDataBinance(newBinanceData);
  }, [data]);

  useEffect(() => {
    const newKuCoin = data.map((item) => item.kucoin_coins);
    setDataKuCoin(newKuCoin);
  }, [data]);

  return <Dashboard dataBinance={dataBinance} dataKuCoin={dataKuCoin} />;
}

export default App;
