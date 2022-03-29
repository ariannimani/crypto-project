import React from "react";

export default function TableItem() {
  return (
    <thead>
      <tr>
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Name
        </th>
        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
          Price
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Rank
        </th>

        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Percentage Today
        </th>
        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
          Percentage 7 Days
        </th>
        <th className="text-secondary opacity-7"></th>
      </tr>
    </thead>
  );
}
