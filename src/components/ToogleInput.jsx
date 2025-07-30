import React, { useState } from "react";

const Toggleinput = () => {
  const [useRandomData, setUseRandomData] = useState(false);

  const toggleRandomData = () => {
    setUseRandomData((prev) => !prev);
  };

  return (
    <div>
      <label className="text-[#323232] text-[15px] leading-[1] tracking-[1.6%] font-semibold">
        <h3>Use Random Data</h3>
      </label>
      <div className="flex mt-3.5 items-center justify-between py-2 px-4 border border-[#2525251A] rounded-lg">
        <span className="text-sm text-[#252525] placeholder:opacity-50">
          Select "Active" to Collect Random Data or "Inactive" to Disabled it.
        </span>
        <button
          type="button"
          onClick={toggleRandomData}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
            useRandomData ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              useRandomData ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Toggleinput;
