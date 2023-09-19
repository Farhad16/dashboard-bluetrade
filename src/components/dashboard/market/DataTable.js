import React from "react";
import { useTable, useSortBy } from "react-table";

const DataTable = ({ data, columns }) => {
  console.log(columns, columns);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  return (
    <div className="w-full overflow-x-auto">
      <table {...getTableProps()} className="w-full font-normal">
        <tbody {...getTableBodyProps()} className="table-body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table-row">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="table-cell text-xs py-4 border-b border-[#5E6E78] border-opacity-10"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
