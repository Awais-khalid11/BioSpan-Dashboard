import React, { useState, useRef, useEffect } from "react";
import BasicTable from "../components/BasicTable";
import {
  Edit2,
  Plus,
  Trash2,
  CheckCircle,
  XCircle,
  MoreVertical,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const columns = [
  { label: "Supplement Name", key: "supplements" },
  { label: "Category", key: "category" },
  { label: "Assigned Goal", key: "goal" },
  { label: "Description", key: "description" },
  { label: "Status", key: "status" },
  { label: "Action", key: "action" },
];

const CustomDropdown = ({ id, currentStatus, onToggle }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)}>
        <MoreVertical className="h-4 w-4 text-gray-600" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-md z-50">
          <button
            onClick={() => navigate("/supplement-modal")}
            className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Edit2 className="w-4 h-4 text-gray-600" />
                <span>Edit</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </button>

          <div className="w-full px-4 py-2 text-sm hover:bg-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Plus className="w-4 h-4 text-gray-600" />
                <span>Add</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(id);
            }}
            className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-600">Active</span>
              </div>
              <div
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  currentStatus === "Active" ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    currentStatus === "Active"
                      ? "translate-x-5"
                      : "translate-x-0.5"
                  }`}
                />
              </div>
            </div>
          </button>

          <div className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">
            <div className="flex items-center gap-2 text-red-500">
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Supplements = () => {
  const navigate = useNavigate();
  const [supplements, setSupplements] = useState([
    {
      id: 1,
      supplements: "Magnesium Glycinate",
      category: "Recovery",
      goal: "Sleep, Fat Loss",
      description: "Helps relax muscles & improve sleep",
      status: "Active",
    },
    {
      id: 2,
      supplements: "Vitamin D3",
      category: "Health",
      goal: "Immune Support",
      description: "Supports immune system and bone health",
      status: "Active",
    },
    {
      id: 3,
      supplements: "Omega-3",
      category: "Health",
      goal: "Heart Health",
      description: "Supports cardiovascular health",
      status: "Hidden",
    },
    {
      id: 4,
      supplements: "Protein Powder",
      category: "Performance",
      goal: "Muscle Building",
      description: "Supports muscle growth and recovery",
      status: "Active",
    },
    {
      id: 5,
      supplements: "Creatine",
      category: "Performance",
      goal: "Strength",
      description: "Improves strength and power output",
      status: "Active",
    },
    {
      id: 6,
      supplements: "Multivitamin",
      category: "Health",
      goal: "General Health",
      description: "Covers daily vitamin and mineral needs",
      status: "Hidden",
    },
    {
      id: 7,
      supplements: "Probiotics",
      category: "Health",
      goal: "Digestive Health",
      description: "Supports gut health and digestion",
      status: "Active",
    },
  ]);

  const toggleStatus = (id) => {
    setSupplements((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Active" ? "Hidden" : "Active",
            }
          : item
      )
    );
  };

  const formatStatus = (status) => {
    const isActive = status === "Active";
    return (
      <span
        className={`flex items-center gap-1 text-sm px-3 py-1.5 w-[116px] h-[38px] rounded-[36px] justify-center border ${
          isActive
            ? "bg-[#0676471A] text-[#067647] border-[#067647]"
            : "bg-[#F044381A] text-[#F04438] border-[#F04438]"
        }`}
      >
        {isActive ? (
          <CheckCircle className="w-4 h-4" />
        ) : (
          <XCircle className="w-4 h-4" />
        )}
        {status}
      </span>
    );
  };

  const tableData = supplements.map((item) => ({
    supplements: item.supplements,
    category: item.category,
    goal: item.goal,
    description: item.description,
    status: formatStatus(item.status),
    action: (
      <CustomDropdown
        id={item.id}
        currentStatus={item.status}
        onToggle={toggleStatus}
      />
    ),
    raw: item,
  }));

  return (
    <div>
      <BasicTable
        title="Supplements Managment"
        columns={columns}
        data={tableData}
        showPagination={true}
        showSearch={false}
        showFilter={false}
        filterButtonText="Filter by Goal & Status"
        itemsPerPage={5}
        customButton={
          <button
            onClick={() => navigate("/edit-protocol")}
            className="bg-[#072723] text-[#B0ED56] px-5 py-2.5 rounded-[8px] flex items-center gap-2 cursor-pointer font-medium text-[16px]"
          >
            <Plus className="w-4 h-4" />
            Add New Supplement
          </button>
        }
      />
    </div>
  );
};

export default Supplements;
