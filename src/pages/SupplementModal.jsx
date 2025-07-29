import React, { useState } from "react";
import Input from "../components/Input";
import Selector from "../components/Selector";

const SupplementModal = () => {
  const [selectedGoal, setSelectedGoal] = useState("fat_loss");
  const [status, setStatus] = useState("Active");

  const goalOptions = [
    { label: "Select the supplement type", value: "fat_loss" },
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
        Add/Edit Supplement Modal
      </h1>

      <div className="bg-white rounded-[12px] border border-[#0000001A] p-5">
        <form action="#">
          <h3 className="text-[20px] font-bold text-black mb-4 ">
            User Details
          </h3>

          <div className="flex items-center gap-5 mb-5 ">
            <Input
              label="Supplement Name"
              type="text"
              value="Enter supplement name"
              id="supplement-name"
            />
            <div className="w-1/2 ">
              <Selector
                label="Category"
                options={goalOptions}
                value={selectedGoal}
                onChange={setSelectedGoal}
              />
            </div>
          </div>

          <div className="flex items-center gap-5 mb-5 ">
            <Input
              label="Assigned Goals:"
              type="text"
              value="Which health goals this supports"
              id="assigned-goals"
            />
            <Input
              label="Short Description:"
              type="text"
              value="Brief benefit summary"
              id="short-description"
            />
          </div>

          <div className="flex items-center gap-5 mb-5 ">
            <Input
              label="Long Description"
              type="text"
              value="Use this space to describe benefits, dosage, or science."
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
                  Control whether this supplement is visible to users or not
                </span>

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
              Save Supplement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupplementModal;
