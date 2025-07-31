// Selector.js
import React from "react";

const Selector = ({ label, options, value, onChange }) => {
  return (
    <div className="relative w-full">
      {label && (
        <label className="block">
          <h3 className="text-gray-800 text-sm md:text-base font-semibold">
            {label}
          </h3>
        </label>
      )}

      <div className="relative mt-2 md:mt-3">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-3 md:py-4 pr-10 md:pr-12 text-sm md:text-base appearance-none focus:outline-none focus:ring-2 focus:border-transparent"
          style={{
            MozAppearance: "none",
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
        <div className="pointer-events-none absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-gray-500"
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
