import React from "react";

export default function Navigation({ value, handleChange }) {
  return (
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl">
      <div className="container-fluid py-1 px-3">
        <div
          className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
          id="navbar"
        >
          {/* Search */}
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Type here..."
                value={value}
                onChange={handleChange}
              />
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            {/* Settings Icon */}
            <li className="nav-item px-3 d-flex align-items-center">
              <a href="./" className="nav-link text-body p-0">
                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>
            {/* Alarm Icon */}
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a
                href="./"
                className="nav-link text-body p-0"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-bell cursor-pointer"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
