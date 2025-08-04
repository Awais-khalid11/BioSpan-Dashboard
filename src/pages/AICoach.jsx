import React, { useState } from "react";
import { X } from "lucide-react";
import { TbEdit } from "react-icons/tb";
import BasicTable from "../components/BasicTable";
import { useNavigate } from "react-router-dom";

// Status rendering
const renderStatus = (status) => {
  const statusStyles = {
    Active: "bg-[#0676471A] text-[#067647] border-[#067647]",
    Draft: "bg-[#FFAF3F1A] text-[#FFAF3F] border-[#FFAF3F]",
    Flagged: "bg-[#F900001A] text-[#F90000] border-[#F90000]",
  };

  return (
    <div className="flex justify-center">
      <span
        className={`text-sm px-3 py-1.5 flex items-center w-[116px] h-[38px] rounded-[36px] justify-center border ${
          statusStyles[status] || "bg-gray-100 text-gray-700 border-gray-200"
        }`}
      >
        {status}
      </span>
        
    </div>
  );
};
const AICoach = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isActive, setIsActive] = useState(true);

  const handleEdit = (row) => {
    setSelectedRow(row);
    setIsActive(row.status?.props?.children === "Active");
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  const columns = [
    {
      label: "Prompt/Trigger",
      key: "prompt",
      align: "text-left",
    },
    {
      label: "AI Response",
      key: "bioscore",
      align: "text-left",
    },
    {
      label: "Goals",
      key: "goals",
      align: "text-center",
    },
    {
      label: "Created On",
      key: "dates",
      align: "text-center",
    },
    {
      label: "Status",
      key: "status",
      align: "text-center",
    },
    {
      label: "Action",
      key: "action",
      align: "text-center",
    },
  ];

  const data = [
    {
      id: "1",
      prompt: "I feel tired in mornings",
      bioscore: "Try magnesium and light.",
      goals: "Fat Loss",
      dates: "2025-07-16",
      status: renderStatus("Active"),
    },
    {
      id: "2",
      prompt: "Need help building muscle",
      bioscore: "Add protein + creatine...",
      goals: "Longevity",
      dates: "2025-07-12",
      status: renderStatus("Draft"),
    },
    {
      id: "3",
      prompt: "I don't sleep well after gym",
      bioscore: "Try cold showers + magnesium",
      goals: "Sleep Opt.",
      dates: "2025-07-10",
      status: renderStatus("Flagged"),
    },
    {
      id: "4",
      prompt: "I feel tired in mornings",
      bioscore: "Add protein + creatine...",
      goals: "Fat Loss",
      dates: "2025-07-16",
      status: renderStatus("Active"),
    },
    {
      id: "5",
      prompt: "Need help building muscle",
      bioscore: "Try magnesium and light...",
      goals: "Longevity",
      dates: "2025-07-12",
      status: renderStatus("Draft"),
    },
    {
      id: "6",
      prompt: "I don't sleep well after gym",
      bioscore: "Try cold showers + magnesium",
      goals: "Sleep Opt.",
      dates: "2025-07-10",
      status: renderStatus("Flagged"),
    },
  ];

  const tableData = data.map((row) => ({
    ...row,
    action: (
      <button
        onClick={() => handleEdit(row)}
        className="flex items-center text-gray-600 text-sm hover:text-gray-800 transition-colors"
      >
        <TbEdit className="h-3 w-3 mr-0.5" />
        <b> Edit</b>
      </button>
    ),
  }));

  return (
    <div>
      <BasicTable
        title="AI Coach Manager"
        columns={columns}
        data={tableData}
        showPagination={true}
        showDatePicker={true}
        filterButtonText="Filter by Goal & Status"
        itemsPerPage={5}
        showExtraIcon={true}
      />

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center px-4 sm:px-6">
          <div className="bg-white w-full max-w-[700px] rounded-xl p-4 sm:p-6 shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-6">Add Prompt</h2>

            {/* Responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Trigger Prompt
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedRow?.prompt || ""}
                    placeholder="I feel tired in the mornings"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-600 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    AI Response
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedRow?.prompt || ""}
                    placeholder="I feel tired in the mornings"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-600 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Linked Goal
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-600 appearance-none bg-white">
                      <option value="Sleep">Sleep</option>
                      <option value="Fat Loss">Fat Loss</option>
                      <option value="Longevity">Longevity</option>
                      <option value="Sleep Opt.">Sleep Opt.</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Status:
                  </label>
                  <div className="flex items-center">
                    <div className="relative">
                      <div
                        className={`w-12 h-6 rounded-full shadow-inner cursor-pointer transition-colors ${
                          isActive ? "bg-green-500" : "bg-gray-300"
                        }`}
                        onClick={() => setIsActive(!isActive)}
                      >
                        <div
                          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                            isActive ? "translate-x-6" : "translate-x-0.5"
                          }`}
                        ></div>
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">
                        {isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="w-full sm:w-auto px-8 py-2.5 rounded-lg bg-[#1a472a] text-white hover:bg-[#0f3a1a] transition-colors">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AICoach;
