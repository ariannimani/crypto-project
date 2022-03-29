import React from "react";

export default function TableRows({ data }) {
  return data.map((data) => (
    <tr key={data._id}>
      <td>
        <div className="d-flex px-2 py-1">
          <div>
            <img
              src="../assets/img/team-4.jpg"
              className="avatar avatar-sm me-3"
              alt="user6"
            />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <h6 className="mb-0 text-sm">{data.name}</h6>
            <p className="text-xs text-secondary mb-0">{data.short_name}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="text-xs font-weight-bold mb-0">{data.current_price}</p>
      </td>
      <td>
        <p className="align-middle text-center text-xs font-weight-bold mb-0">
          {data.rank}
        </p>
      </td>
      <td className="align-middle text-center text-sm">
        <span
          className={`badge badge-sm ${
            data.price_percentage_one_day >= 0
              ? "bg-gradient-success"
              : "bg-gradient-danger"
          }`}
        >
          {data.price_percentage_one_day}
        </span>
      </td>
      <td className="align-middle text-center text-sm">
        <span
          className={`badge badge-sm ${
            data.price_percentage_seven_days >= 0
              ? "bg-gradient-success"
              : "bg-gradient-danger"
          }`}
        >
          {data.price_percentage_seven_days}
        </span>
      </td>
    </tr>
  ));
}
