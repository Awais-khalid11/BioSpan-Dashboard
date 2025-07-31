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
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold text-black mb-4">
        Add/Edit Supplement Modal
      </h1>

      <div className="bg-white rounded-lg md:rounded-xl border border-gray-200 p-4 md:p-6">
        <form>
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            User Details
          </h3>

          {/* Supplement Name and Category */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-4 md:mb-5">
            <div className="w-full md:w-1/2">
              <Input
                label="Supplement Name"
                type="text"
                defaultValue=""
                placeholder="Enter supplement name"
                id="supplement-name"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Selector
                label="Category"
                options={goalOptions}
                value={selectedGoal}
                onChange={setSelectedGoal}
              />
            </div>
          </div>

          {/* Assigned Goals and Short Description */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-4 md:mb-5">
            <div className="w-full md:w-1/2">
              <Input
                label="Assigned Goals"
                type="text"
                defaultValue=""
                placeholder="Which health goals this supports"
                id="assigned-goals"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Input
                label="Short Description"
                type="text"
                defaultValue=""
                placeholder="Brief benefit summary"
                id="short-description"
              />
            </div>
          </div>

          {/* Long Description and Status Toggle */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-4 md:mb-5">
            <div className="w-full md:w-1/2">
              <Input
                label="Long Description"
                type="text"
                defaultValue=""
                placeholder="Use this space to describe benefits, dosage, or science."
                id="long-description"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="status-toggle">
                <h3 className="text-gray-800 text-sm md:text-base font-semibold mb-2 md:mb-3">
                  Status
                </h3>
              </label>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-3 md:py-4 px-4 md:px-5 rounded-lg border border-gray-200 bg-white">
                <span className="text-xs md:text-sm text-gray-600 opacity-70 mb-2 md:mb-0">
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
          <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-3">
            <button
              type="button"
              className="w-full md:w-1/5 px-4 py-3 md:py-4 rounded-lg border border-gray-800 text-sm font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full md:w-4/5 bg-[#072723] text-white px-4 py-3 md:py-4 rounded-lg border border-gray-800 text-sm font-bold"
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
