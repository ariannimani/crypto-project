import React, { useContext } from "react";
import "./filter-dropdown.styles.css";
import { DataContext } from "../../data/dataAPI";

export default function FilterDropDownBtn() {
  const { data, handleChangeDropdown } = useContext(DataContext);
  //const dates = data.map((date) => {
  //  const d = new Date(date.created_at);
  //  return `${d.getDate()}/${
  //    d.getMonth() + 1
  //  }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} CET`;
  //});

  return (
    <div className="dropdown">
      <select name="date" id="mySelect" onChange={handleChangeDropdown}>
        {data.map((date) => {
          const d = new Date(date.created_at);
          return (
            <option
              className="dropdown-item"
              key={date._id}
              value={date.created_at}
            >
              {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()} {d.getHours()}:
              {d.getMinutes()}:{d.getSeconds()} CET
            </option>
          );
        })}
      </select>
    </div>
  );
}
