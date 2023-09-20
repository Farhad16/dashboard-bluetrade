import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const data = [
  {
    id: 1,
    name: "Deposit",
    money: "+$23,738",
    time: "11:34 PM",
    status: "pending",
    growth: "fall",
  },
  {
    id: 11,
    name: "SANDUSDT",
    money: "-$576",
    time: "06:01 AM",
    status: "done",
    growth: "rise",
  },
  {
    id: 12,
    name: "DOGEUSDT",
    money: "+$3500",
    time: "02:10 AM",
    status: "done",
    growth: "fall",
  },
  {
    id: 15,
    name: "FTMUSDT",
    money: "+$791",
    time: "06:45 PM",
    status: "done",
    growth: "rise",
  },
];

export const columnData = [
  {
    id: "growth",
    accessor: "growth",
    Cell: ({ value }) => {
      return (
        <div className="dark:text-white text-left text-xs font-semibold pr-2">
          {value === "fall" ? (
            <ArrowDownwardIcon
              sx={{ fill: "#26AB5F" }}
              className="bg-[#26AB5F] bg-opacity-20 rounded-full p-[4px]"
            />
          ) : (
            <ArrowUpwardIcon
              sx={{ fill: "#EE6E6E" }}
              className="bg-[#EE6E6E] bg-opacity-20 rounded-full p-[4px]"
            />
          )}
        </div>
      );
    },
  },
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
    id: "money",
    accessor: "money",
    Cell: ({ value }) => {
      return (
        <div className="text-right">
          <span
            className={`font-semibold ${
              value.slice(0, 1) === "+" ? "text-[#26AB5F]" : "text-[#EE6E6E]"
            }`}
          >
            {value}
          </span>
        </div>
      );
    },
  },
  {
    id: "time",
    accessor: "time",
    Cell: ({ value }) => {
      return (
        <div className="font-medium dark:text-white text-right w-full pr-2">
          {value}
        </div>
      );
    },
  },
  {
    id: "status",
    accessor: "status",
    Cell: ({ value }) => {
      return (
        <div className="text-right">
          <span
            className={`font-semibold px-2 py-1 rounded-full ${
              value === "done"
                ? "text-[#26AB5F] bg-[#26AB5F] bg-opacity-20"
                : "text-[#F4A662] bg-[#F4A662] bg-opacity-20"
            }`}
          >
            {value}
          </span>
        </div>
      );
    },
  },
];
