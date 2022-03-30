import React, { useContext } from "react";
import "./filter-dropdown.styles.css";
import { DataContext } from "../../data/dataAPI";

export default function FilterDropDownBtn() {
  const { data, handleDropdownChange } = useContext(DataContext);
  const dates = data.map((date) => {
    const d = new Date(date.created_at);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${
      d.getHours() + 1
    }:${d.getMinutes()}:${d.getSeconds()} CET`;
  });

  return (
    <div className="filter-dropdowns">
      <select
        name="genre"
        className="genre"
        id="mySelect"
        onChange={handleDropdownChange}
      >
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
}
