import { createContext, useState, useEffect } from "react";
export const DataContext = createContext({
  data: [],
  dataBinance: [],
  dataKuCoin: [],
  searchValue: "",
});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataBinance, setDataBinance] = useState([]);
  const [dataKuCoin, setDataKuCoin] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dateDropdown, setDateDropdown] = useState([]);

  console.log(dateDropdown);

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

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleChangeDropdown = (event) => {
    setDateDropdown(event.target.value);
  };

  const value = {
    data,
    dataBinance,
    dataKuCoin,
    searchValue,
    handleChange,
    handleChangeDropdown,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
