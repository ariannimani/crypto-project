import React, { useContext } from "react";
import { DataContext } from "../../../data/dataAPI";
import "./favorites.styles.css";

export default function FavoriteBtn({ coins }) {
  const { removeFavourites, addFavourites, favourites } =
    useContext(DataContext);
  return (
    <div className="star-button">
      <ion-icon
        name={
          favourites.map((item) => item._id).includes(coins._id)
            ? "star"
            : "star-outline"
        }
        color={
          favourites.map((item) => item._id).includes(coins._id)
            ? "warning"
            : ""
        }
        onClick={() => {
          favourites.map((item) => item._id).includes(coins._id)
            ? removeFavourites(coins)
            : addFavourites(coins);
        }}
      ></ion-icon>
    </div>
  );
}
