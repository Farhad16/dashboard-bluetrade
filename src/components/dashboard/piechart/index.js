import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { data } from "./data";
import MoreVertIcon from "@mui/icons-material/MoreHoriz";

function PieChart() {
  const colors = ["#B1D3FF", "#00C4DF", "#155AB6", "#3380FF"];

  return (
    <div className="flex flex-col bg-white dark:bg-[#1C1C25] rounded-lg w-full p-5 overflow-hidden col-span-1">
      <div className="flex justify-between items-center">
        <p className="text-[17px] font-semibold dark:text-white">Convert</p>
        <span className="opacity-30 text-[10px] dark:bg-[#0D0D0D] dark:text-white  px-2 py-[3px] rounded-md border border-[#5E6E78] border-opacity-50">
          <MoreVertIcon />
        </span>
      </div>
      <ResponsivePie
        data={data}
        colors={colors}
        margin={{ top: 10, right: 30, bottom: 30, left: 30 }}
        innerRadius={0.85}
        activeInnerRadiusOffset={4}
        activeOuterRadiusOffset={4}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsLinkOffset={0}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        enableArcLinkLabels={false}
        enableArcLabels={false}
      />
      <div className="flex flex-row items-center text-[10px] gap-2 justify-center">
        <div className="flex flex-row items-center gap-[3px] bg-[#0060FF] bg-opacity-10 px-[6px] py-[2px] rounded-[4px]">
          <div className="bg-[#2F80ED] w-2 h-2 rounded-xs" />
          <span className="text-[#2F80ED] font-semibold">BTC</span>
        </div>
        <div className="flex flex-row items-center gap-[3px] bg-[#0060FF] bg-opacity-10 px-[6px] py-[2px] rounded-[4px]">
          <div className="bg-[#B1D3FF] w-2 h-2 rounded-xs" />
          <span className="text-[#2F80ED] font-semibold">ADA</span>
        </div>
        <div className="flex flex-row items-center gap-[3px] bg-[#0060FF] bg-opacity-10 px-[6px] py-[2px] rounded-[4px]">
          <div className="bg-[#00C4DF] w-2 h-2 rounded-xs" />
          <span className="text-[#2F80ED] font-semibold">ETH</span>
        </div>
        <div className="flex flex-row items-center gap-[3px] bg-[#0060FF] bg-opacity-10 px-[6px] py-[2px] rounded-[4px]">
          <div className="bg-[#155AB6] w-2 h-2 rounded-xs" />
          <span className="text-[#2F80ED] font-semibold">Others</span>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
