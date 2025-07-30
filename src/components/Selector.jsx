import React from "react";

const Selector = ({ label, options, value, onChange }) => {
  return (
    <div className="relative">
      {label && (
        <label className="block">
          <h3 className="text-[#323232] text-[15px] leading-[1] tracking-[1.6%] font-semibold">
            {label}
          </h3>
        </label>
      )}

      <div className="relative mt-3">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-[#2525251A] rounded-[12px] px-3.5 py-[15px] pr-12 text-[16px] appearance-none focus:outline-none focus:ring-2 focus:border-transparent"
          style={{
            // Remove default dropdown arrow in Firefox
            MozAppearance: "none",
            // Remove default dropdown arrow in IE
            msExpandedAppearance: "none",
          }}
        >
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Selector;
