import React from "react";
import "../table-item/table-item.styles.css";

export default function TableRows({ data, searchValue }) {
  return data
    .filter(
      (coin) =>
        coin.name.toLowerCase().match(new RegExp(searchValue, "i")) ||
        coin.short_name.toLowerCase().match(new RegExp(searchValue, "i"))
    )
    .map((coins) => (
      <tr key={coins._id}>
        <td>
          <div className="d-flex px-2 py-1">
            <div className="mobile-hidden">
              <img
                src="./"
                //src={require(coins.img.substring(0, coins.img.indexOf("?")))}
                className="avatar avatar-sm me-3"
                alt={coins.short_name}
              />
            </div>
            <div className="d-flex flex-column justify-content-center ">
              <a href={coins.url} target="_blank" rel="noreferrer">
                <h6 className="mb-0 text-sm mobile-hidden">{coins.name}</h6>
                <p className="text-xs text-secondary mb-0">
                  {coins.short_name}
                </p>
              </a>
            </div>
          </div>
        </td>
        <td>
          <p className="text-xs font-weight-bold mb-0">
            {window.innerWidth < 401
              ? "$" +
                Math.round(coins.current_price.replace("$", "") * 100) / 100
              : coins.current_price}
          </p>
        </td>
        <td className="tablet-hidden mobile-hidden">
          <p className="align-middle text-center text-xs font-weight-bold mb-0">
            {coins.rank}
          </p>
        </td>
        <td className="align-middle text-center text-sm">
          <span
            className={`badge badge-sm ${
              coins.price_percentage_one_day >= 0
                ? "bg-gradient-success"
                : "bg-gradient-danger"
            }`}
          >
            {coins.price_percentage_one_day} %
          </span>
        </td>
        <td className="align-middle text-center text-sm">
          <span
            className={`badge badge-sm ${
              coins.price_percentage_seven_days >= 0
                ? "bg-gradient-success"
                : "bg-gradient-danger"
            }`}
          >
            {coins.price_percentage_seven_days} %
          </span>
        </td>
        <td className="mobile-hidden">
          <p className="align-middle text-center text-xs font-weight-bold mb-0">
            {coins.market_cap}
          </p>
        </td>
      </tr>
    ));
}
