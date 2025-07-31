import React from "react";
import ProgressChart from "../components/ProgreesChart";

const tabsData = [
  {
    icon: "../../public/assets/icons/apple.svg",
    title: "Apple Watch",
    percentage: "38%",
  },
  {
    icon: "../../public/assets/icons/apple.svg",
    title: "Apple Watch",
    percentage: "38%",
  },
  {
    icon: "../../public/assets/icons/apple.svg",
    title: "Apple Watch",
    percentage: "38%",
  },
];

const WearableChart = ({ tabs = tabsData }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm border border-[#00000012] p-4 sm:p-5">
      <div className="text-xl sm:text-[25px] font-bold text-black mb-2 sm:mb-4">
        <h1 className="leading-[1]">Wearable Sync %</h1>
      </div>
      <p className="text-gray-600 text-xs sm:text-sm leading-6 mb-3 sm:mb-2.5">
        72% of active users have at least one wearable connected
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-5">
        <div className="rounded-[12px] border border-[rgba(0,0,0,0.1)] w-full lg:w-[63%]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 px-2 sm:py-[16px] sm:px-3 border-b last:border-b-0 border-[rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <img
                  src={tab.icon}
                  alt={tab.title}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <h4 className="text-sm sm:text-[16px] font-medium text-black">
                  {tab.title}
                </h4>
              </div>
              <div className="bg-[#EEFCFA] text-[#072723] leading-[138%] text-base sm:text-[20px] font-bold py-1 px-2 sm:py-2 sm:px-3 rounded-[8px]">
                {tab.percentage}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[12px] border border-[#00000012] w-full lg:w-[35%]">
          <ProgressChart />
        </div>
      </div>
    </div>
  );
};

export default WearableChart;
