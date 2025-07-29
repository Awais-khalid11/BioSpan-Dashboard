import  { useState } from "react";
import { TbEdit } from "react-icons/tb";
import BasicTable from "../../components/BasicTable";
import { X } from "lucide-react"; // or wherever your X icon comes from


// Status rendering
const renderStatus = (status) => {
  const statusStyles = {
    Active: "bg-[#0676471A] text-[#067647] border-[#067647]",
    Draft: "bg-[#FFAF3F1A] text-[#FFAF3F] border-[#FFAF3F]",
    Flagged: "bg-[#F900001A] text-[#F90000] border-[#F90000]",
  };

  return (
    <span
      className={`text-sm px-3 py-1.5 flex items-center w-[116px] h-[38px] rounded-[36px] justify-center border ${
        statusStyles[status] || "bg-gray-100 text-gray-700 border-gray-200"
      }`}
    >
      {status}
    </span>
  );
};

const Protocols = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setSelectedRow(null);
  };

  const columns = [
    { label: "Prompt/Trigger", key: "prompt" },
    { label: "AI Response", key: "bioscore" },
    { label: "Goals", key: "goals" },
    { label: "Created On", key: "dates" },
    { label: "Status", key: "status" },
    {
      label: "Action",
      key: "action",
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
      />

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white w-[500px] rounded-xl p-6 shadow-lg relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Edit BioScore</h2>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Prompt</label>
                <input
                  type="text"
                  value={selectedRow?.prompt || ""}
                  className="w-full mt-1 border rounded px-3 py-2"
                  readOnly
                />
              </div>
              <div>
                <label className="text-sm font-medium">AI Response</label>
                <textarea
                  rows={3}
                  defaultValue={selectedRow?.bioscore || ""}
                  className="w-full mt-1 border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Goals</label>
                <input
                  type="text"
                  value={selectedRow?.goals || ""}
                  className="w-full mt-1 border rounded px-3 py-2"
                  readOnly
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 mr-2"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded bg-[#6C47FF] text-white hover:bg-[#5a3de0]">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Protocols;