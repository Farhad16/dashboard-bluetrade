import MoreVertIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Conveter() {
  const [fromOption, setFromOption] = useState("USDT");
  const [toOption, setToOption] = useState("BTC");
  const [fromCrypto, setFromCrypto] = useState(1);
  const [toCrypto, setToCrypto] = useState(0.0043);

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    if (fromOption === "USDT" && fromCrypto) {
      setToCrypto(fromCrypto * 0.0043);
    } else if (fromOption === "BTC" && fromCrypto) {
      setToCrypto(fromCrypto / 0.0043);
    } else if (toOption === "USDT" && !fromCrypto) {
      setFromCrypto(toCrypto * 0.0043);
    } else if (toOption === "BTC" && !fromCrypto) {
      setFromCrypto(toCrypto / 0.0043);
    }
  };

  const handleSelectChange1 = (e) => {
    const change = e.target.value;
    if (change === toOption) {
      const temp = toCrypto;

      setToCrypto(fromCrypto);
      setFromCrypto(temp);
      setToOption(fromOption);
    }
    setFromOption(change);
  };

  const handleSelectChange2 = (e) => {
    const change = e.target.value;
    if (change === fromOption) {
      const temp = toCrypto;
      setToCrypto(fromCrypto);
      setFromCrypto(temp);
      setFromOption(toOption);
    }
    setToOption(change);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-[#1C1C25] rounded-lg w-full p-5 overflow-auto gap-4 col-span-1">
      <div className="flex justify-between items-center">
        <p className="text-[17px] font-semibold dark:text-white">Convert</p>
        <span className="opacity-30 text-[10px] dark:bg-[#0D0D0D] dark:text-white  px-2 py-[3px] rounded-md border border-[#5E6E78] border-opacity-50">
          <MoreVertIcon />
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="relative flex items-center">
          <input
            onChange={(e) => setFromCrypto(e.target.value)}
            type="number"
            value={fromCrypto}
            placeholder="Enter text"
            className="font-semibold text-xs dark:bg-[#121212] bg-[#F9F9FA] w-full rounded-md p-[10px] py-[12px] pr-14 focus:border-none outline-none dark:text-white"
          />
          <select
            value={fromOption}
            onChange={handleSelectChange1}
            className="text-[10px] font-semibold absolute right-1 ml-[8px] text-[#26AB5F] bg-[#26AB5F] bg-opacity-20 focus:border-none outline-none rounded-md py-1"
          >
            <option value="USDT">USDT</option>
            <option value="BTC">BTC</option>
          </select>
        </div>
        <div className="relative flex items-center">
          <input
            onChange={(e) => setToCrypto(e.target.value)}
            value={toCrypto}
            type="number"
            placeholder="Enter text"
            className="font-semibold text-xs dark:bg-[#121212] bg-[#F9F9FA] w-full rounded-md p-[10px] py-[12px] pr-14 focus:border-none outline-none dark:text-white"
          />
          <select
            value={toOption}
            onChange={handleSelectChange2}
            className="text-center text-[10px] font-semibold absolute right-1 ml-[8px] text-[#FF8B1E] bg-[#FF8B1E] bg-opacity-20 focus:border-none outline-none rounded-md py-1"
          >
            <option value="BTC">BTC</option>
            <option value="USDT">USDT</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-sm font-semibold w-full bg-[#4D91FF] dark:text-black text-white pt-2 pb-3 outline-none rounded-md"
        >
          Convert Now
        </button>
      </form>
      <p className="text-[8px] text-[#626D7D]">
        The ultimate price and output is determined by the amount of tokens in
        the pool at the time of your swap.
      </p>
    </div>
  );
}

export default Conveter;
