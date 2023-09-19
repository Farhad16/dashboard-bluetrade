export const data = [
  {
    id: 1,
    name: "BTCUSDT",
    tag: "Bitcoin",
    money: "$23,495",
    growth: "+23.4%",
  },
  {
    id: 11,
    name: "AXSUSDT",
    tag: "Axie Infinity",
    money: "$15.9",
    growth: "-7.8%",
  },
  {
    id: 12,
    name: "ETHUSDT",
    tag: "Ethereum",
    money: "$15,978",
    growth: "-0,3%",
  },
  {
    id: 15,
    name: "SOLUSDT",
    tag: "Solana",
    money: "$15,978 ",
    growth: "+11.1%",
  },
  {
    id: 61,
    name: "BNBUSDT",
    tag: "Binance",
    money: "$267",
    growth: "+6.7%",
  },
  {
    id: 81,
    name: "ADAUSDT",
    tag: "Cardano",
    money: "$0.49",
    growth: "-1.4%",
  },
];

export const columnData = [
  {
    id: "name",
    accessor: "name",
    Cell: ({ value }) => {
      return (
        <div className="dark:text-white text-left text-xs font-semibold pr-2">
          {value}
        </div>
      );
    },
  },

  {
    id: "tag",
    accessor: "tag",
    Cell: ({ value }) => {
      return <span className="text-[#5E6E78] font-semibold">{value}</span>;
    },
  },
  {
    id: "money",
    accessor: "money",
    Cell: ({ value }) => {
      return (
        <div className="font-medium dark:text-white text-right w-full pr-2">
          {value}
        </div>
      );
    },
  },
  {
    id: "growth",
    accessor: "growth",
    Cell: ({ value }) => {
      return (
        <div className="text-right">
          <span
            className={`font-semibold px-2 py-1 rounded-full ${
              value.slice(0, 1) === "+"
                ? "text-[#26AB5F] bg-[#26AB5F] bg-opacity-20"
                : "text-[#EE6E6E] bg-[#EE6E6E] bg-opacity-20"
            }`}
          >
            {value}
          </span>
        </div>
      );
    },
  },
];
