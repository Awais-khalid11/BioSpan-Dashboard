import React from "react";
import TrendUpIcon from "../../public/assets/icons/trend-up.svg";
import TrendDownIcon from "../../public/assets/icons/trend-down.svg";

const Cards = ({ icon, users, userNumber, analytics, total }) => {
  const analyticsColorClass =
    analytics === "stable"
      ? "text-green-600"
      : analytics && analytics.startsWith("+")
      ? "text-green-600"
      : analytics && analytics.startsWith("-")
      ? "text-red-600"
      : "text-gray-600";

  let displayAnalyticsIcon = null;

  if (analytics === "stable") {
    displayAnalyticsIcon = (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1"
      >
        <circle cx="6" cy="6" r="4" fill="#10B981" />
      </svg>
    );
  } else if (analytics && analytics.startsWith("-")) {
    displayAnalyticsIcon = (
      <img src={TrendDownIcon} alt="Trend Down Icon" className="w-4 h-4 mr-1" />
    );
  } else if (analytics && analytics.startsWith("+")) {
    displayAnalyticsIcon = (
      <img src={TrendUpIcon} alt="Trend Up Icon" className="w-4 h-4 mr-1" />
    );
  }

  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 flex flex-col gap-3 border border-[rgba(37,37,37,0.07)]
        bg-[rgba(255,255,255,1)] rounded-[12px] drop-shadow-[0_0px_15px_rgba(0,0,0,0.05)]
        text-[rgba(37,37,37,1)]"
    >
      <div>
        <img src={icon} alt={`${users} Icon`} className="w-11 h-11" />
      </div>
      <div className="opacity-80 text-[16px] leading-[1] font-semibold">
        <p>{users}</p>
      </div>
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold mb-0 leading-[1]">{userNumber}</h1>
        <p className="flex items-center text-sm">
          {displayAnalyticsIcon}
          <span className={`${analyticsColorClass} font-medium`}>
            {analytics}
          </span>
        </p>
      </div>
      <div className="text-sm leading-[1] opacity-80 line-clamp-1">
  <p>{total}</p>
</div>

    </div>
  );
};

export default Cards;
