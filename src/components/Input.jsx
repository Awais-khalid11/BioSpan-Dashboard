import React from "react";

const Input = ({ label, type, value, id, placeholder, onChange }) => {
  const isDate = type === "date";

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="text-gray-800 text-sm md:text-base font-semibold"
      >
        <h3>{label}</h3>
      </label>

      <div className="relative mt-2 md:mt-3">
        {isDate && (
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <img
              src="/assets/icons/calendar.svg"
              alt="calendar icon"
              className="w-4 h-4 md:w-5 md:h-5 opacity-70"
            />
          </div>
        )}

        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full text-sm text-gray-800 placeholder-gray-400 py-3 md:py-4 ${
            isDate ? "pl-10 md:pl-12" : "px-3 md:px-4"
          } pr-3 md:pr-4 rounded-lg md:rounded-xl border border-gray-200`}
          style={
            isDate
              ? {
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                }
              : {}
          }
        />
      </div>
    </div>
  );
};

export default Input;
