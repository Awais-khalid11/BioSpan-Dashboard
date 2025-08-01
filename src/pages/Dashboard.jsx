import React, { useState } from "react";
import Button from "../components/Button";
import Cards from "../components/Cards";
import UserIcon from "../../public/assets/icons/User.svg";
import TrendUpIcon from "../../public/assets/icons/trend-up.svg";
import LineCharts from "../components/LineCharts";
import PieCharts from "../components/PieCharts";
import WearableChart from "../components/WearableChart";

import Crown from "../../public/assets/icons/crown-cards.svg";
import Rating from "../../public/assets/icons/Ranking.svg";
import Flag from "../../public/assets/icons/Flag.svg";
import Supplements from "../../public/assets/icons/supplements.svg";

const textData = ["All Time", "This Week", "This Month", "This Year"];

const allCardsData = {
  "All Time": [
    {
      icon: UserIcon,
      users: "Total Users",
      userNumber: "1,482,345",
      analytics: "+38%",
      analyticsIcon: TrendUpIcon,
      total: "since all time",
    },
    {
      icon: Crown,
      users: "Premium Users",
      userNumber: "$5.2M",
      analytics: "+15%",
      analyticsIcon: TrendUpIcon,
      total: "since all time",
    },
    {
      icon: Rating,
      users: "Avg BioScore",
      userNumber: "250,000",
      analytics: "+22%",
      analyticsIcon: TrendUpIcon,
      total: "since all time",
    },
    {
      icon: Flag,
      users: "Top Goal",
      userNumber: "250,000",
      analytics: "+22%",
      analyticsIcon: TrendUpIcon,
      total: "since all time",
    },
    {
      icon: Supplements,
      users: "Top Supplement",
      userNumber: "250,000",
      analytics: "+22%",
      analyticsIcon: TrendUpIcon,
      total: "since all time",
    },
  ],
  "This Year": [
    {
      icon: UserIcon,
      users: "Total Users",
      userNumber: "1,200,000",
      analytics: "+25%",
      analyticsIcon: TrendUpIcon,
      total: "this year",
    },
    {
      icon: Crown,
      users: "Premium Users",
      userNumber: "$4.5M",
      analytics: "+10%",
      analyticsIcon: TrendUpIcon,
      total: "this year",
    },
    {
      icon: Rating,
      users: "Avg BioScore",
      userNumber: "200,000",
      analytics: "+18%",
      analyticsIcon: TrendUpIcon,
      total: "this year",
    },
    {
      icon: Flag,
      users: "Top Goal",
      userNumber: "250,000",
      analytics: "+22%",
      analyticsIcon: TrendUpIcon,
      total: "since all time",
    },
    {
      icon: Supplements,
      users: "Top Supplement",
      userNumber: "250,000",
      analytics: "+22%",
      analyticsIcon: TrendUpIcon,
      total: "since all time",
    },
  ],
  "This Month": [
    {
      icon: UserIcon,
      users: "Total Users",
      userNumber: "1,482",
      analytics: "+38%",
      analyticsIcon: TrendUpIcon,
      total: "+38 this week",
    },
    {
      icon: Crown,
      users: "Premium Users",
      userNumber: "316",
      analytics: "-21%",
      analyticsIcon: TrendUpIcon,
      total: "21% of tota",
    },
    {
      icon: Rating,
      users: "Avg BioScore",
      userNumber: "78.6",
      analytics: "stable",
      total: "based on last 7 days",
    },
    {
      icon: Flag,
      users: "Top Goal",
      userNumber: "Fat Loss",
      total: "42% of users",
    },
    {
      icon: Supplements,
      users: "Top Supplement",
      userNumber: "Magnesium",
      total: "Assigned in 68% protocols",
    },
  ],
  "This Week": [
    {
      icon: UserIcon,
      users: "Total Users",
      userNumber: "10,000",
      analytics: "+38%",
      analyticsIcon: TrendUpIcon,
      total: "this week",
    },
    {
      icon: Crown,
      users: "Premium Users",
      userNumber: "$50K",
      analytics: "+15%",
      analyticsIcon: TrendUpIcon,
      total: "this week",
    },
    {
      icon: Rating,
      users: "Avg BioScore",
      userNumber: "1,500",
      analytics: "+30%",
      analyticsIcon: TrendUpIcon,
      total: "this week",
    },
    {
      icon: Flag,
      users: "Top Goal",
      userNumber: "250,000",
      analytics: "+22%",
      analyticsIcon: TrendUpIcon,
      total: "since all time",
    },
    {
      icon: Supplements,
      users: "Top Supplement",
      userNumber: "250,000",
      analytics: "+22%",
      analyticsIcon: TrendUpIcon,
      total: "since all time",
    },
  ],
};

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("This Month");

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  const currentCards = allCardsData[activeButton] || [];

  return (
    <div className="px-2.5 sm:px-4">
      <div className="flex flex-col sm:flex-row justify-between flex-wrap items-start sm:items-center mb-4 sm:mb-[15px] mt-1.5">
        <div className="text-xl sm:text-[25px] font-bold text-black leading-[1] mb-4 sm:mb-0">
          <h1>Summary Overview</h1>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {textData.map((item) => (
            <Button
              key={item}
              text={item}
              isActive={item === activeButton}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>

      <div className="mb-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-3">
          {currentCards.map((card, index) => (
            <Cards
              key={index}
              icon={card.icon}
              users={card.users}
              userNumber={card.userNumber}
              analytics={card.analytics}
              analyticsIcon={card.analyticsIcon}
              total={card.total}
            />
          ))}
        </div>
      </div>

      <div className="mb-5">
        <LineCharts />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-2.5">
        <div className="w-full lg:w-[67%]">
          <WearableChart />
        </div>
        <div className="w-full lg:w-[32%]">
          <PieCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
