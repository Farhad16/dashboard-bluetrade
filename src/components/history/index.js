import React, { useMemo } from "react";
import DataTable from "../dashboard/market/DataTable";
import { columnData, data } from "./statis.data";

function History() {
  const columns = useMemo(() => columnData, []);
  const allData = useMemo(() => data, []);

  return (
    <div className="flex flex-col bg-white dark:bg-[#1C1C25] rounded-lg w-full p-5 overflow-auto gap-4 lg:col-span-2 sm:col-span-1">
      <div className="flex justify-between items-center opacity-40">
        <p className="text-[17px] font-semibold dark:text-white">HIstory</p>
        <span className="text-[10px] dark:bg-[#0D0D0D] dark:text-white px-2.5 py-1 rounded-lg border border-[#5E6E78] border-opacity-10">
          View All
        </span>
      </div>
      <DataTable data={allData} columns={columns} />
    </div>
  );
}

export default History;
