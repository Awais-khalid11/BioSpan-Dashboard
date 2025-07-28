import React from 'react';

const Selector = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4 relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[#2525251A] rounded-[12px] px-3.5 py-4 pr-12 text-[16px] appearance-none"
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute right-4 top-[50%] translate-y-[-50%]">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Selector;
