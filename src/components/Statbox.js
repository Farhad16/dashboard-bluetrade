import React from "react";
import { ReactComponent as EyeIcon } from "../assets/svgs/eye.svg";

function Statbox({
  icon,
  name,
  tag,
  balance,
  initialAmount,
  growth,
  estimateBalance,
  amoutType,
  line,
  bg,
}) {
  return (
    <div className="flex flex-col bg-white dark:bg-[#1C1C25] rounded-lg w-full gap-2 p-5">
      <div className="flex flex-row justify-between gap-4 items-center flex-grow">
        <div className="flex flex-row gap-3 items-center">
          <div
            className={`bg-opacity-20 flex items-center justify-center h-[43px] w-[44px] rounded-md ${bg}`}
          >
            {icon}
          </div>
          <p className="flex flex-col gap-1">
            <span className="dark:text-white text-black font-semibold text-sm">
              {name}
            </span>
            <span className="text-[#626D7D] font-semibold text-xs">{tag}</span>
          </p>
        </div>
        {estimateBalance && <EyeIcon />}
      </div>
      <div className="flex flex-row items-center justify-between flex-grow gap-6 overflow-hidden">
        <span
          className={`dark:text-white text-black font-semibold ${
            estimateBalance ? "text-[30px]" : "text-[20px]"
          }`}
        >
          {balance}
        </span>
        {!estimateBalance && <img src={line} alt={name} className="w-1/2" />}
      </div>
      <div className="flex flex-row items-center justify-between text-[13px] gap-2 flex-wrap overflow-hidden">
        <span className="text-[#626D7D]">{amoutType}</span>
        <span
          className={`${
            initialAmount.slice(0, 1) === "+"
              ? "text-[#26AB5F]"
              : "text-[#EE6E6E]"
          }`}
        >
          {initialAmount}
        </span>
        <span className="text-[#26AB5F] bg-[#26AB5F] bg-opacity-20 text-[11px] font-semibold px-2 py-1 rounded-full">
          {growth}
        </span>
      </div>
    </div>
  );
}

export default Statbox;
