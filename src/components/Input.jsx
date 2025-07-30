import React from "react";

const Input = ({ label, type, value, id }) => {
  const isDate = type === "date";

  return (
    <div className="w-1/2">
      <label
        htmlFor={id}
        className="text-[#323232] text-[15px] leading-[1] tracking-[1.6%] font-semibold"
      >
        <h3>{label}</h3>
      </label>

      <div className="relative mt-4">
        {isDate && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <img
              src="/assets/icons/calendar.svg"
              alt="calendar icon"
              className="w-5 h-5 opacity-70"
            />
          </div>
        )}

        <input
          type={type}
          id={id}
          defaultValue={value}
          placeholder={value}
          className={`w-full text-sm text-[#252525] placeholder-opacity-50 py-4.5 ${
            isDate ? "pl-12" : "px-5"
          } pr-5 rounded-[12px] border border-[#2525251A]`}
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
