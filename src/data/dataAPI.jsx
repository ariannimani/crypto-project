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
  const [dateDropdown, setDateDropdown] = useState();

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

  //useEffect(() => {
  //  if (data.created_at === dateDropdown) {
  //    const newBinanceData = data[0].map((item) => item.binance_coins);
  //    setDataBinance(newBinanceData);
  //  }
  //}, [data, dateDropdown]);

  useEffect(() => {
    const newBinanceData = data
      .filter((item) =>
        item.created_at.toLowerCase().match(new RegExp(dateDropdown, "i"))
      )
      .map((item) => item.binance_coins);
    setDataBinance(newBinanceData);
  }, [data, dateDropdown]);

  //useEffect(() => {
  //  const newKuCoin = data.map((item) => item.kucoin_coins);
  //  setDataKuCoin(newKuCoin);
  //}, [data]);

  useEffect(() => {
    const newKuCoin = data
      .filter((item) =>
        item.created_at.toLowerCase().match(new RegExp(dateDropdown, "i"))
      )
      .map((item) => item.kucoin_coins);
    setDataKuCoin(newKuCoin);
  }, [data, dateDropdown]);

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
    dateDropdown,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
