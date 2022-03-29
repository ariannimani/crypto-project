import React from "react";
import SideItem from "../../components/side-item/side-item.component";

const SideBar = () => {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <a className="navbar-brand m-0" href="./" target="_blank">
          <img
            src={require("../../assets/img/logo-ct.png")}
            className="navbar-brand-img h-100"
            alt="main_logo"
          />
          <span className="ms-1 font-weight-bold">prRush - Crypto</span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <SideItem page={"binance"} TableContent="Binance Coins" />
          <SideItem page={"kucoin"} TableContent="KuCoin Coins" />
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
