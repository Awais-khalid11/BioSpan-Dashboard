import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Selector = ({
  label,
  value,
  options,
  placeholder,
  onChange,
  icon: Icon, // Add icon prop
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="w-full" ref={ref}>
      <label className="text-gray-800 text-sm md:text-base font-semibold">
        <h3>{label}</h3>
      </label>

      <div className="relative mt-2 md:mt-3" onClick={() => setIsOpen(!isOpen)}>
        <div className="w-full text-sm text-gray-800 placeholder-gray-400 py-3 md:py-4 px-3 md:px-4 pr-10 md:pr-12 rounded-lg md:rounded-xl border border-gray-200 bg-white cursor-pointer flex items-center">
          {/* Add icon on the left if provided */}
          {Icon && (
            <div className="mr-2">
              <Icon className="w-4 h-4 text-gray-500" />
            </div>
          )}

          {selectedOption ? (
            <span>{selectedOption.label}</span>
          ) : (
            <span className="text-gray-400">
              {placeholder || "Select an option"}
            </span>
          )}
        </div>

        {/* Down arrow remains on the right */}
        <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 opacity-70" />
        </div>

        {/* Dropdown options */}
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="font-medium text-sm text-gray-800">
                  {option.label}
                </div>
                {option.hint && (
                  <div className="text-xs text-gray-500 mt-0.5">
                    {option.hint}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;
