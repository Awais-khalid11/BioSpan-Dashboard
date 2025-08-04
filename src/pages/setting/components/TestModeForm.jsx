import React, { useState } from "react";
import Selector from "../../../components/Selector";
import { CiPlay1 } from "react-icons/ci";
import Toggleinput from "../../../components/ToogleInput";

const TestModeForm = () => {
  const [selectedTestType, setSelectedTestType] = useState("protocol");
  const [selectedEnvironment, setSelectedEnvironment] = useState("sandbox");
  const [selectedRole, setSelectedRole] = useState("admin");
  const [useRandomData, setUseRandomData] = useState(true);

  const testTypeOptions = [
    { label: "Protocol", value: "protocol" },
    { label: "Integration", value: "integration" },
    { label: "Unit Test", value: "unit" },
    { label: "Performance", value: "performance" },
  ];

  const environmentOptions = [
    { label: "Sandbox", value: "sandbox" },
    { label: "Development", value: "development" },
    { label: "Staging", value: "staging" },
    { label: "Production", value: "production" },
  ];

  const roleOptions = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
    { label: "Moderator", value: "moderator" },
  ];

  const toggleRandomData = () => {
    setUseRandomData(!useRandomData);
  };

  const handleReset = () => {
    setSelectedTestType("protocol");
    setSelectedEnvironment("sandbox");
    setSelectedRole("admin");
    setUseRandomData(true);
  };

  const handleSavePreset = () => {
    console.log("Preset saved:", {
      testType: selectedTestType,
      environment: selectedEnvironment,
      role: selectedRole,
      randomData: useRandomData,
    });
  };

  const handleRunTest = () => {
    console.log("Running test with:", {
      testType: selectedTestType,
      environment: selectedEnvironment,
      role: selectedRole,
      randomData: useRandomData,
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Test Mode</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Selector
              label="Select Test Type"
              options={testTypeOptions}
              value={selectedTestType}
              onChange={setSelectedTestType}
            />
          </div>

          <div>
            <Selector
              label="Test Environment"
              options={environmentOptions}
              value={selectedEnvironment}
              onChange={setSelectedEnvironment}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6 mb-6">
          <div>
            <Toggleinput />
          </div>

          <div>
            <Selector
              label="Run as Role"
              options={roleOptions}
              value={selectedRole}
              onChange={setSelectedRole}
            />
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Test Output</h1>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-white min-h-64">
            <p className="text-gray-400 text-lg">
              Test Output or preview will be shown here...
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-stretch gap-4">
          <div className="w-full sm:w-auto flex-1">
            <button
              type="button"
              onClick={handleReset}
              className="w-full h-[48px] flex items-center justify-center gap-2 px-6 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors whitespace-nowrap"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span className="truncate">Reset</span>
            </button>
          </div>

          <div className="w-full sm:w-auto flex-1">
            <button
              type="button"
              onClick={handleSavePreset}
              className="w-full h-[48px] flex items-center justify-center gap-2 px-6 bg-[#072723] text-white font-medium rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-colors whitespace-nowrap"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
              <span className="truncate">Save as Preset</span>
            </button>
          </div>

          <div className="w-full sm:w-auto flex-1">
            <button
              type="button"
              onClick={handleRunTest}
              className="w-full h-[48px] flex items-center justify-center gap-2 px-6 bg-[#B0ED56] text-black font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors whitespace-nowrap"
            >
              Run Test
              <CiPlay1 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestModeForm;
