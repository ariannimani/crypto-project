import React from "react";
import "./table-item.styles.css";

export default function TableItem() {
  return (
    <thead>
      <tr>
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 mobile-hidden">
          Rank
        </th>
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Name
        </th>
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
          Price
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 mobile-hidden">
          MarketCap
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Today
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          7 Days
        </th>
      </tr>
    </thead>
  );
}
