import React, { useState } from "react";
import { ResponsiveBoxPlot } from "@nivo/boxplot";
import { data } from "./data";

function BoxPlotChart() {
  const colors = ["#4D91FF", "#032658"];
  const timeLimit = ["1H", "3H", "5H", "1D", "1W", "1M"];
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col bg-white dark:bg-[#1C1C25] rounded-lg w-full lg:col-span-2 sm:col-span-1 p-6 overflow-hidden">
      <div className="flex flex-col justify-between items-center gap-6 sm:flex-row">
        <div className="flex flex-row justify-between dark:bg-[#121212] bg-[#F9F9FA] px-3 py-2 w-[220px] rounded-lg">
          <div className="flex flex-col gap-1">
            <span className="text-base font-semibold dark:text-white">
              BTCUSDT
            </span>
            <span className="text-xs font-medium dark:text-[#626D7D]">
              Bitcoin
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col gap-1s">
              <span className="text-base font-semibold dark:text-white">
                $23,738
              </span>
              <span className="text-center text-[#26AB5F] bg-[#26AB5F] bg-opacity-20 text-[11px] font-semibold px-1 py-1 rounded-full">
                +23.6%
              </span>
            </div>
            <i class="fa fa-caret-down dark:text-white" aria-hidden="true"></i>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center">
          {timeLimit.map((t, i) => (
            <div
              className={`hover:!text-[#1A71FF] cursor-pointer px-2 py-1 bg-[#DDE1E4] dark:text-white text-[10px] rounded-md dark:bg-[#262C30] bg-opacity-[0.22] ${
                active === i && "!text-[#1A71FF]"
              }`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <div className="h-[310px] overflow-hidden">
        <ResponsiveBoxPlot
          data={data}
          colors={colors}
          margin={{ top: 30, right: 10, bottom: 30, left: 50 }}
          minValue={19000}
          maxValue={23000}
          subGroupBy="subgroup"
          padding={0.65}
          innerPadding={15}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 1,
            legend: "",
            legendPosition: "middle",
            legendOffset: -46,
            tickTextColor: "#ddd",
            tickValues: 10,
          }}
          borderWidth={2}
          borderColor={{
            from: "color",
            modifiers: [["darker", "0"]],
          }}
          medianWidth={0}
          medianColor={{
            from: "color",
            modifiers: [["darker", "0.2"]],
          }}
          whiskerColor={{
            from: "color",
            modifiers: [["darker", "0"]],
          }}
          inactiveOpacity={0}
          motionConfig={{
            mass: 1,
            tension: 79,
            friction: 26,
            clamp: true,
            precision: 0.01,
            velocity: 0,
          }}
          legends={[]}
        />
      </div>
    </div>
  );
}

export default BoxPlotChart;
