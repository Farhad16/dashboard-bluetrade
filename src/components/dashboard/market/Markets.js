import React, { useMemo } from "react";
import { columnData, data } from "./mockData";
import DataTable from "./DataTable";

function Markets() {
  const catagories = ["All", "Metaverse", "Gaming", "Defi", "NFT"];
  const columns = useMemo(() => columnData, []);
  const allData = useMemo(() => data, []);

  return (
    <div className="flex flex-col bg-white dark:bg-[#1C1C25] rounded-lg w-full p-5 overflow-auto gap-4">
      <div className="flex flex-row items-center gap-[3px] flex-wrap dark:text-white">
        <p className="text-[17px] font-semibold">Markets</p>
        {catagories.map((name) => (
          <span
            key={name}
            className={`cursor-pointer text-xs bg-[#F8F8F9] dark:bg-[#131313] px-2.5 py-1 rounded-lg hover:text-[#1A71FF] ${
              name === "All" && "text-[#1A71FF]"
            }`}
          >
            {name}
          </span>
        ))}
      </div>
      <DataTable data={allData} columns={columns} />
      <div className="flex justify-end items-center dark:text-white opacity-40">
        <span className="text-[10px] dark:bg-[#0D0D0D] px-2.5 py-1 rounded-md border border-[#5E6E78] border-opacity-50">
          View All
        </span>
      </div>
    </div>
  );
}

export default Markets;
