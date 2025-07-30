import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import BasicTable from "../../components/BasicTable";
import { X } from "lucide-react"; // or wherever your X icon comes from
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom"; // if not already

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
  const navigate = useNavigate();

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
        onClick={() => navigate("/edit-protocol")}
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
        showSearch={true}
        showFilter={true}
        showExtraIcon={true}
        filterButtonText="Filter by Goal & Status"
        itemsPerPage={5}
        customButton={
          <button
            onClick={() => navigate("/edit-protocol")}
            className="bg-[#072723] text-[#B0ED56] px-5 py-2.5 rounded-[8px] flex items-center gap-2 cursor-pointer font-medium text-[16px]"
          >
            <Plus className="w-4 h-4" />
            Add New Protocol
          </button>
        }
      />
    </div>
  );
};

export default Protocols;
