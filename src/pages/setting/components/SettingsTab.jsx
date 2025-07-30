import React from "react";

const SettingsTabs = ({ tabText, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-[10px] px-[23px] rounded-[28px] border border-[#25252526] transition-all
        ${selected ? "bg-[#B0ED56] text-[#072723]" : "bg-transparent"}`}
    >
      <h5
        className={`text-sm  leading-[1.38] ${
          selected ? "text-[#072723]" : "text-[#252525]"
        } `}
      >
        {tabText}
      </h5>
    </button>
  );
};

export default SettingsTabs;
