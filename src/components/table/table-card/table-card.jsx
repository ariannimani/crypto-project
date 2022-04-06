import React from "react";
import FilterDropDownBtn from "../../buttons/filter-dropdown/filter-dropdown.component";
import TableItem from "../table-item/table-item.component";
import TableRows from "../table-rows/table-rows.component";

export default function TableCard({ title, data }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>{title}</h6>
            <FilterDropDownBtn />
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <TableItem />
                <tbody>
                  {data.map((data) => {
                    return <TableRows key={data} data={data} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
