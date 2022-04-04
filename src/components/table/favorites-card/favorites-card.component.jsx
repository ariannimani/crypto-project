import React, { useContext } from "react";
import TableItem from "../table-item/table-item.component";
import TableRows from "../table-rows/table-rows.component";
import { DataContext } from "../../../data/dataAPI";

export default function FavoritesCard({ title, data, searchValue }) {
  const { removeFavourites } = useContext(DataContext);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>{title}</h6>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <TableItem />
                <tbody>
                  <TableRows
                    key={data}
                    data={data}
                    searchValue={searchValue}
                    removeFavourites={removeFavourites}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
