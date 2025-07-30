import React from "react";
import ProgreesChart from "./ProgreesChart";

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
    <div className="bg-white rounded-[20px] drop-shadow-[0_0_30px_rgba(37,37,37,0.1)] border border-[#00000012] p-5">
      <div className="text-[25px] font-bold text-black mb-4 sm:mb-0">
        <h1 className="leading-[1]">Wearable Sync %</h1>
      </div>
      <p className="text-gray-600 text-sm leading-6 mb-2.5 font-inter">
        72% of active users have at least one wearable connected
      </p>
      <div className="flex items-center gap-5">
        <div className="rounded-[12px] border border-[rgba(0,0,0,0.1)] w-[63%]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-[16px] px-3 border-b last:border-b-0 border-[rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-4">
                <img src={tab.icon} alt={tab.title} className="w-8 h-8" />
                <h4 className="text-[16px] font-medium text-black">
                  {tab.title}
                </h4>
              </div>
              <div className=" bg-[#EEFCFA] text-[#072723] leading-[138%] text-[20px] font-bold py-2 px-3  rounded-[8px]">
                {tab.percentage}
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[12px] border border-[#00000012] w-[35%] ">
          <ProgreesChart />
        </div>
      </div>
    </div>
  );
};

export default WearableChart;
