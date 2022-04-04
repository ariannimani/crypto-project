import React, { useContext } from "react";
import TableCard from "../../components/table/table-card/table-card";
import { useNavigate, Route, Routes } from "react-router-dom";

import Navigation from "../../routes/Navigation/Navigation";
import SideBar from "../../routes/SideBar/SideBar";
import { DataContext } from "../../data/dataAPI";
import FavoritesCard from "../../components/table/favorites-card/favorites-card.component";

export default function Dashboard() {
  const {
    dataBinance,
    dataKuCoin,
    searchValue,
    handleChange,
    addFavourites,
    favourites,
  } = useContext(DataContext);

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

  const favoritePage = () => {
    navigate("/favorite");
  };

  return (
    <div className="g-sidenav-show  bg-gray-100">
      <SideBar
        homePage={homePage}
        binancePage={binancePage}
        kucoinPage={kucoinPage}
        favoritePage={favoritePage}
      />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navigation handleChange={handleChange} />

        <div className="container-fluid py-4">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TableCard
                  data={dataBinance}
                  title="Binance Coins"
                  searchValue={searchValue}
                  addFavourites={addFavourites}
                />
              }
            />
            <Route
              exact
              path="/binance"
              element={
                <TableCard
                  data={dataBinance}
                  title="Binance Coins"
                  searchValue={searchValue}
                  addFavourites={addFavourites}
                />
              }
            />
            <Route
              exact
              path="/kucoin"
              element={
                <TableCard
                  data={dataKuCoin}
                  title="Kucoin Coins"
                  searchValue={searchValue}
                  addFavourites={addFavourites}
                />
              }
            />
            <Route
              exact
              path="/favorites"
              element={
                <FavoritesCard
                  data={favourites}
                  title="Favorite Coins"
                  searchValue={searchValue}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}
