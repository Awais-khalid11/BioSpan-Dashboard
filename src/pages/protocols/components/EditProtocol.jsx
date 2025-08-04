import React, { useState } from "react";
import Input from "../../../components/Input";
import Selector from "../../../components/Selector";

const EditProtocol = () => {
  const [selectedGoal, setSelectedGoal] = useState("fat_loss");
  const [status, setStatus] = useState("Active");
  const [protocolName, setProtocolName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  const goalOptions = [
    {
      label: "Sleep",
      value: "fat_loss",
      hint: "Improve your sleep quality for better recovery.",
    },
    {
      label: "Muscle Gain",
      value: "muscle_gain",
      hint: "Build muscle mass with optimized workouts and diet.",
    },
    {
      label: "Longevity",
      value: "longevity",
      hint: "Focus on long-term health and cellular vitality.",
    },
    {
      label: "Better Sleep",
      value: "sleep",
      hint: "Get deeper, uninterrupted sleep cycles.",
    },
  ];

  const toggleStatus = () => {
    setStatus(status === "Active" ? "Hidden" : "Active");
  };

  return (
    <div className="">
      <h1 className="text-xl md:text-2xl font-bold text-black mb-4">
        Edit Protocol
      </h1>

      <div className="bg-white rounded-lg md:rounded-xl border border-gray-200 p-4 md:p-6">
        <form action="#">
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            User Details
          </h3>

          {/* Protocol Name and Assigned Goals */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center mb-4 md:mb-5">
            <div className="w-full md:w-1/2">
              <Input
                label="Protocol Name"
                type="text"
                value={protocolName}
                onChange={(e) => setProtocolName(e.target.value)}
                id="supplement-name"
                placeholder="Enter protocol name"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Selector
                label="Assigned Goals"
                options={goalOptions}
                value={selectedGoal}
                onChange={setSelectedGoal}
              />
            </div>
          </div>

          {/* Short Description and Add Supplements */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-4 md:mb-5">
            <div className="w-full md:w-1/2">
              <Input
                label="Short Description:"
                type="text"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                id="short-description"
                placeholder="Enter a short description"
              />
            </div>

            {/* Add Supplements section */}
            <div className="w-full md:w-1/2">
              <label className="text-gray-800 text-sm md:text-base font-semibold mb-2 block">
                Add Supplements
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                {[
                  "Melatonin 3mg",
                  "Magnesium Glycinate",
                  "Ashwagandha",
                  "Valerian Root",
                  "GABA",
                ].map((supplement) => (
                  <label
                    key={supplement}
                    className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 text-xs md:text-sm text-gray-800"
                  >
                    <span className="mr-2 truncate">{supplement}</span>
                    <input
                      type="checkbox"
                      className="form-checkbox h-3 w-3 md:h-4 md:w-4 text-green-600"
                      value={supplement}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Created Date and Status */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-4 md:mb-5 items-center">
            <div className="w-full md:w-1/2">
              <Input
                label="Created Date"
                type="date"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
                id="created-date"
                placeholder="Select date"
              />{" "}
            </div>

            <div className="w-full md:w-1/2">
              <label>
                <h3 className="text-gray-800 text-sm md:text-base font-semibold mb-1">
                  Status:
                </h3>
              </label>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mt-2  py-3.5 px-3  rounded-lg md:rounded-xl border border-gray-300 bg-white">
                <span className="text-xs md:text-sm text-gray-600 leading-[1]">
                  Select "Active" to show this protocol or "Inactive" to hide
                  it.
                </span>

                <button
                  type="button"
                  onClick={toggleStatus}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors outline-none ring-offset-2 focus:ring-2 focus:ring-blue-500 ${
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
          <div className="flex flex-col-reverse md:flex-row gap-3">
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProtocol;
