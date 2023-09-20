import React from "react";
import Layout from "../Layout";
import { ReactComponent as Bitcoin } from "../../assets/svgs/bitcoin.svg";
import { ReactComponent as Ethusd } from "../../assets/svgs/ethusd.svg";
import { ReactComponent as Solu } from "../../assets/svgs/solu.svg";
import { ReactComponent as Esti } from "../../assets/svgs/esti.svg";
import line1 from "../../assets/icons/line1.png";
import line2 from "../../assets/icons/line2.png";
import line3 from "../../assets/icons/line3.png";
import Statbox from "../Statbox";
import Markets from "./market/Markets";
import PlotChart from "../PlotChart";
import History from "./history";
import Conveter from "./conveter";
import PieChart from "./piechart";

const statData = [
  {
    icon: <Esti />,
    name: "Estimated Balance",
    tag: "",
    balance: "$123,987",
    amoutType: "Monthly Profit",
    initialAmount: "+$2560.78",
    growth: "+14.67%",
    estimateBalance: true,
    bg: "bg-[#4690EF]",
  },
  {
    icon: <Bitcoin />,
    name: "BTCUSDT",
    tag: "Bitcoin",
    balance: "$23,738",
    amoutType: "PNL Daily",
    initialAmount: "-$16.78",
    growth: "+14.67%",
    line: line1,
    bg: "bg-[#FFA621]",
  },
  {
    icon: <Ethusd />,
    name: "ETHUSDT",
    tag: "Ethereum",
    balance: "$23,738",
    amoutType: "PNL Daily",
    initialAmount: "+$189.91",
    growth: "+24.68%",
    line: line2,
    bg: "bg-[#623AFF]",
  },
  {
    icon: <Solu />,
    name: "SOLUSDT",
    tag: "Solana",
    balance: "$23,738",
    amoutType: "PNL Daily",
    initialAmount: "+$556.14",
    growth: "+64.11%",
    line: line3,
    bg: "bg-[#623AFF]",
  },
];
function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {statData.map((s) => (
            <Statbox key={s.name} {...s} alt="img" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <PlotChart />
          <Markets />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <PieChart />
          <Conveter />
          <History />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
