import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import BasicTable from "../../components/BasicTable";
import { X, Plus, CheckCircle, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Protocols = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();

  const columns = [
    { label: "Prompt/Trigger", key: "prompt", align: "text-left" },
    { label: "AI Response", key: "bioscore", align: "text-left" },
    { label: "Goals", key: "goals", align: "text-center" },
    { label: "Created On", key: "dates", align: "text-center" },
    { label: "Status", key: "status", align: "text-center" },
    { label: "Action", key: "action", align: "text-center" },
  ];
  const renderStatus = (status) => {
    const statusStyles = {
      Active: {
        bg: "bg-[#0676471A]",
        text: "text-[#067647]",
        border: "border-[#067647]",
        icon: <CheckCircle className="w-4 h-4" />,
      },
      Draft: {
        bg: "bg-[#FFAF3F1A]",
        text: "text-[#FFAF3F]",
        border: "border-[#FFAF3F]",
        icon: null,
      },
      Hidden: {
        bg: "bg-[#F900001A]",
        text: "text-[#F90000]",
        border: "border-[#F90000]",
        icon: <XCircle className="w-4 h-4" />,
      },
    };

    const currentStatus = statusStyles[status] || {
      bg: "bg-gray-100",
      text: "text-gray-700",
      border: "border-gray-200",
      icon: null,
    };

    return (
      <span
        className={`flex items-center gap-1 text-sm px-3 py-1.5 w-[116px] h-[38px] rounded-[36px] justify-center border ${currentStatus.bg} ${currentStatus.text} ${currentStatus.border} mx-auto`}
      >
        {currentStatus.icon}
        {status}
      </span>
    );
  };

  const data = [
    {
      id: "1",
      prompt: "I feel tired in mornings",
      bioscore: "Try magnesium and light.",
      goals: "Fat Loss",
      dates: "2025-07-16",
      status: "Active",
    },
    {
      id: "2",
      prompt: "Need help building muscle",
      bioscore: "Add protein + creatine...",
      goals: "Longevity",
      dates: "2025-07-12",
      status: "Active",
    },
    {
      id: "3",
      prompt: "I don't sleep well after gym",
      bioscore: "Try cold showers + magnesium",
      goals: "Sleep Opt.",
      dates: "2025-07-10",
      status: "Hidden",
    },
    {
      id: "4",
      prompt: "I feel tired in mornings",
      bioscore: "Add protein + creatine...",
      goals: "Fat Loss",
      dates: "2025-07-16",
      status: "Active",
    },
    {
      id: "5",
      prompt: "Need help building muscle",
      bioscore: "Try magnesium and light...",
      goals: "Longevity",
      dates: "2025-07-12",
      status: "Hidden",
    },
    {
      id: "6",
      prompt: "I don't sleep well after gym",
      bioscore: "Try cold showers + magnesium",
      goals: "Sleep Opt.",
      dates: "2025-07-10",
      status: "Hidden",
    },
  ];

  const tableData = data.map((row) => ({
    ...row,
    status: renderStatus(row.status),
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
