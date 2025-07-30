import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Button from "./Button";

const allChartData = {
  "12 Months": [
    { name: "Jan", pv: 400 },
    { name: "Feb", pv: 300 },
    { name: "Mar", pv: 500 },
    { name: "Apr", pv: 700 },
    { name: "May", pv: 600 },
    { name: "Jun", pv: 800 },
    { name: "Jul", pv: 750 },
    { name: "Aug", pv: 900 },
    { name: "Sep", pv: 850 },
    { name: "Oct", pv: 700 },
    { name: "Nov", pv: 650 },
    { name: "Dec", pv: 950 },
  ],
  "30 Days": [
    { name: "3 Jul", pv: 200 },
    { name: "3 Jul", pv: 350 },
    { name: "3 Jul", pv: 450 },
    { name: "Day 10", pv: 300 },
    { name: "Day 13", pv: 500 },
    { name: "Day 16", pv: 600 },
    { name: "Day 19", pv: 400 },
    { name: "Day 22", pv: 700 },
    { name: "Day 25", pv: 550 },
    { name: "Day 28", pv: 800 },
    { name: "Day 30", pv: 700 },
  ],
  "7 Days": [
    { name: "Mon", pv: 250 },
    { name: "Tue", pv: 400 },
    { name: "Wed", pv: 300 },
    { name: "Thu", pv: 550 },
    { name: "Fri", pv: 480 },
    { name: "Sat", pv: 620 },
    { name: "Sun", pv: 500 },
  ],
  "24 Hours": [
    { name: "00:00", pv: 100 },
    { name: "04:00", pv: 250 },
    { name: "08:00", pv: 400 },
    { name: "12:00", pv: 600 },
    { name: "16:00", pv: 500 },
    { name: "20:00", pv: 700 },
    { name: "24:00", pv: 650 },
  ],
};

const chartTabLabels = ["12 Months", "30 Days", "7 Days", "24 Hours"];

const LineCharts = () => {
  const [activeChartTab, setActiveChartTab] = useState("30 Days");

  const handleChartTabClick = (tabLabel) => {
    setActiveChartTab(tabLabel);
  };

  const currentChartData = allChartData[activeChartTab] || [];

  return (
    <div
      style={{
        width: "100%",
        background: "white",
        filter: "drop-shadow(0 0px 15px rgba(0,0,0,0.05))",
      }}
      className=" outline-none focus:outline-none p-5 rounded-[12px]  bg-white "
    >
      <div className="flex flex-wrap gap-3 mb-4 justify-between items-center">
        <div className="text-[25px] font-bold text-black mb-4 sm:mb-0">
          <h1 className="leading-[1]">Summary Overview</h1>
        </div>

        <div className="flex items-center">
          {chartTabLabels.map((item) => (
            <Button
              key={item}
              text={item}
              isActive={item === activeChartTab}
              onButtonClick={handleChartTabClick}
            />
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={215}>
        <AreaChart
          width={1070}
          height={215}
          data={currentChartData}
          syncId="anyId"
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A9C87B" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#B0ED5600" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="rgba(0, 0, 0, 0.05)" strokeDasharray="1 1" />
          <XAxis dataKey="name" stroke="#999" />
          <YAxis
            domain={[0, 1000]}
            ticks={[0, 200, 400, 600, 800, 1000]}
            stroke="#999"
          />
          <Tooltip />

          <Area
            type="linear"
            dataKey="pv"
            stroke="#B0ED56"
            strokeWidth={2}
            fill="url(#greenGradient)"
            dot={{
              r: 4,
              stroke: "#B0ED56",
              strokeWidth: 2,
              fill: "#ffffff",
            }}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
