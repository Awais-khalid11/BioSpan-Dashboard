import React, { useState } from "react";
import Input from "../../../components/Input";
import Selector from "../../../components/Selector";

const EditProtocol = () => {
  const [selectedGoal, setSelectedGoal] = useState("fat_loss");
  const [status, setStatus] = useState("Active");

  const goalOptions = [
    { label: "Sleep", value: "fat_loss" },
    { label: "Muscle Gain", value: "muscle_gain" },
    { label: "Longevity", value: "longevity" },
    { label: "Better Sleep", value: "sleep" },
  ];

  const toggleStatus = () => {
    setStatus(status === "Active" ? "Hidden" : "Active");
  };

  return (
    <div>
      <h1 className="text-[25px] font-bold text-black mb-4  leading-[1]">
Edit Protocol      </h1>

      <div className="bg-white rounded-[12px] border border-[#0000001A] p-5">
        <form action="#">
          <h3 className="text-[20px] font-bold text-black mb-4 ">
            User Details
          </h3>

          <div className="flex items-center gap-5 mb-5 ">
            <Input
              label="Protocol Name"
              type="text"
              value="Sleep"
              id="supplement-name"
            />
            <div className="w-1/2 ">
              <Selector
                label="Assigned Goals"
                options={goalOptions}
                value={selectedGoal}
                onChange={setSelectedGoal}
              />
            </div>
          </div>
<div className="flex gap-5 mb-5">
  
    <Input
      label="Short Description:"
      type="text"
      value="A comprehensive nightly protocol specifically designed to enhance deep sleep quality, promote faster muscle recovery, and support overall nighttime regeneration through targeted supplementation and recovery strategies."
      id="short-description"
    />
  

    <Input
      label="Add Supplements"
      type="checkbox"
      value={[
        "Melatonin 3mg",
        "Magnesium Glycinate",
        "Ashwagandha",
        "Valerian Root",
        "GABA",
      ]}
      id="add-supplements"
    />
</div>


          <div className="flex items-center gap-5 mb-5 ">
            <Input
              label="Created Date"
              type="date"
              value="2025 - 05 - 02"
              id="long-description"
            />

            <div className="w-1/2">
              <label>
                <h3 className="text-[#323232] text-[15px] leading-[1] tracking-[1.6%]  font-semibold ">
                  Status:
                </h3>
              </label>
              <div className="flex  mt-3.5 items-center justify-between py-4 px-5 rounded-[12px] border border-[#2525251A] bg-white">
                <span className="text-sm text-[#252525] opacity-50">
Select “Active” to show this protocol or “Inactive” to hide it.                </span>

                <button
                  type="button"
                  onClick={toggleStatus}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                    status === "Active" ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      status === "Active" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              className="w-[20%] px-6 py-[17px] rounded-[12px] leading-[1] border border-[#252525] text-sm tracking-[1.6%] font-extrabold mb-0"
            >
              <h4>Cancel</h4>
            </button>

            <button
              type="submit"
              className="w-[80%] bg-[#072723] text-white leading-[1] px-6 py-[17px] rounded-[12px] border border-[#252525] text-sm tracking-[1.6%] font-extrabold mb-0"
            >
Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProtocol;