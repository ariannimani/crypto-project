import React, { useContext } from "react";
import TableCard from "../../components/table/table-card/table-card";
import { useNavigate, Route, Routes } from "react-router-dom";

import Navigation from "../../routes/Navigation/Navigation";
import SideBar from "../../routes/SideBar/SideBar";
import { DataContext } from "../../data/dataAPI";

export default function Dashboard() {
  const { dataBinance, dataKuCoin, searchValue, handleChange } =
    useContext(DataContext);

  const navigate = useNavigate();

  const homePage = () => {
    navigate("/");
  };
  const binancePage = () => {
    navigate("/binance");
  };
  const kucoinPage = () => {
    navigate("/kucoin");
  };

  return (
    <div className="g-sidenav-show  bg-gray-100">
      <SideBar
        homePage={homePage}
        binancePage={binancePage}
        kucoinPage={kucoinPage}
      />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navigation handleChange={handleChange} />

        <div className="container-fluid py-4">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TableCard data={dataBinance} searchValue={searchValue} />
              }
            />
            <Route
              exact
              path="/binance"
              element={
                <TableCard data={dataBinance} searchValue={searchValue} />
              }
            />
            <Route
              exact
              path="/kucoin"
              element={
                <TableCard data={dataKuCoin} searchValue={searchValue} />
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}
