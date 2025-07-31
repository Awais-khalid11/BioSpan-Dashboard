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
      <h1 className="text-[25px] font-bold text-black mb-4 leading-[1]">
        Add/Edit Supplement Modal
      </h1>

      <div className="bg-white rounded-[12px] border border-[#0000001A] p-5">
        <form>
          <h3 className="text-[20px] font-bold text-black mb-4">
            User Details
          </h3>

          {/* Supplement Name and Category */}
          <div className="flex items-center gap-5 mb-5">
            <Input
              label="Supplement Name"
              type="text"
              defaultValue=""
              placeholder="Enter supplement name"
              id="supplement-name"
            />
            <div className="w-1/2">
              <Selector
                label="Category"
                options={goalOptions}
                value={selectedGoal}
                onChange={setSelectedGoal}
              />
            </div>
          </div>

          {/* Assigned Goals and Short Description */}
          <div className="flex items-center gap-5 mb-5">
            <Input
              label="Assigned Goals"
              type="text"
              defaultValue=""
              placeholder="Which health goals this supports"
              id="assigned-goals"
            />
            <Input
              label="Short Description"
              type="text"
              defaultValue=""
              placeholder="Brief benefit summary"
              id="short-description"
            />
          </div>

          {/* Long Description and Status Toggle */}
          <div className="flex items-center gap-5 mb-5">
            <Input
              label="Long Description"
              type="text"
              defaultValue=""
              placeholder="Use this space to describe benefits, dosage, or science."
              id="long-description"
            />

            <div className="w-1/2">
              <label htmlFor="status-toggle">
                <h3 className="text-[#323232] text-[15px] leading-[1] tracking-[1.6%] font-semibold mb-3">
                  Status
                </h3>
              </label>
              <div className="flex items-center justify-between py-4 px-5 rounded-[12px] border border-[#2525251A] bg-white">
                <span className="text-sm text-[#252525] opacity-50">
                  Control whether this supplement is visible to users or not
                </span>

                <button
                  id="status-toggle"
                  type="button"
                  onClick={toggleStatus}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 ${
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

          {/* Footer Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              className="w-[20%] px-6 py-[17px] rounded-[12px] border border-[#252525] text-sm tracking-[1.6%] font-extrabold"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-[80%] bg-[#072723] text-white px-6 py-[17px] rounded-[12px] border border-[#252525] text-sm tracking-[1.6%] font-extrabold"
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
