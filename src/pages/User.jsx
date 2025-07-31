import {
  Eye,
  Check,
  X,
  MoreVertical,
  ChevronRight,
  Trash2,
  ChevronDown,
} from "lucide-react";
import BasicTable from "../components/BasicTable";
import Avatar from "../../public/assets/images/Avatar.png";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const avatars = {
  "Lydia Press": Avatar,
  "Theresa Webb": Avatar,
  "Jacob Jones": Avatar,
  "Cody Fisher": Avatar,
  "Dianne Russell": Avatar,
  "Darlene Robertson": Avatar,
};

const renderWearables = (hasWearables) => {
  if (hasWearables === "Yes" || hasWearables === true) {
    return (
      <div>
        <div className="inline-flex items-center mr-2.5 bg-green-100 text-green-700 text-xs p-[2px] gap-1">
          <Check className="w-3 h-3" />
        </div>
        Yes
      </div>
    );
  } else {
    return (
      <div>
        <div className="inline-flex items-center bg-red-100 text-red-700 text-xs p-[2px] mr-2.5 gap-1">
          <X className="w-3 h-3" />
        </div>
        No
      </div>
    );
  }
};

const renderStatus = (status) => {
  const statusStyles = {
    Active: "bg-[#0676471A] text-[#067647] border-[#067647]",
    Blocked: "bg-[#9898981A] text-[#989898] border-[#989898]",
    Idle: "bg-[#FFAF3F1A] text-[#FFAF3F] border-[#FFAF3F]",
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

const renderPlans = (plan) => {
  const planStyles = {
    Free: "bg-[#003CA61A] text-[#003CA6]",
    Premium: "bg-[#E1B4001A] text-[#F9C700]",
  };

  const icon = plan === "Free" ? "⭐" : "👑";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-sm px-3 py-1 w-[116px] h-[38px] rounded-[36px] justify-center ${
        planStyles[plan] || "bg-gray-100 text-gray-700"
      }`}
    >
      <span>{icon}</span>
      {plan}
    </span>
  );
};

const renderUser = (name, email) => (
  <div className="flex items-center gap-3">
    <input type="checkbox" className="form-checkbox text-blue-500" />
    <img
      src={
        avatars[name] ||
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      }
      alt="User"
      className="w-10 h-10 rounded-full object-cover"
    />
    <div className="flex flex-col">
      <span className="font-medium text-gray-900 text-sm">{name}</span>
      <span className="text-xs text-gray-500">{email}</span>
    </div>
  </div>
);

const CustomDropdown = ({ userId }) => {
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
      <button
        className="text-gray-600 hover:text-black"
        onClick={() => setOpen(!open)}
      >
        <MoreVertical className="h-4 w-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-md z-50">
          <button
            onClick={() => navigate(`/user-detail/${userId}`)}
            className="w-full flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-600" />
              <span>View</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>

          <div className="w-full flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Active</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>

          <div className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </div>
        </div>
      )}
    </div>
  );
};

const columns = [
  {
    label: (
      <div className="flex items-center gap-3">
        <input type="checkbox" className="form-checkbox text-blue-500" />
        <span>User</span>
      </div>
    ),
    key: "user",
  },
  { label: "Goals", key: "goals" },
  { label: "BioScore", key: "bioscore" },
  { label: "Wearables", key: "wearables" },
  { label: "Plans", key: "plans" },
  { label: "Status", key: "status" },
  { label: "Action", key: "action" },
];

const User = () => {
  const data = [
    {
      id: "1",
      user: renderUser("Lydia Press", "hello@hourglassinc.com"),
      goals: "Fat Loss",
      bioscore: "76.2",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Free"),
      status: renderStatus("Active"),
      action: <CustomDropdown userId={1} />,
    },
    {
      id: "2",
      user: renderUser("Jonas K", "jk@hourglassinc.com"),
      goals: "Muscle Gain",
      bioscore: "88.1",
      wearables: renderWearables("No"),
      plans: renderPlans("Premium"),
      status: renderStatus("Blocked"),
      action: <CustomDropdown userId={2} />,
    },
    {
      id: "3",
      user: renderUser("Emily Stone", "emily@hourglassinc.com"),
      goals: "Endurance",
      bioscore: "67.9",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Premium"),
      status: renderStatus("Active"),
      action: <CustomDropdown userId={3} />,
    },
    {
      id: "4",
      user: renderUser("Emily Stone", "emily@hourglassinc.com"),
      goals: "Endurance",
      bioscore: "67.9",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Premium"),
      status: renderStatus("Active"),
      action: <CustomDropdown userId={3} />,
    },
    {
      id: "5",
      user: renderUser("Emily Stone", "emily@hourglassinc.com"),
      goals: "Endurance",
      bioscore: "67.9",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Premium"),
      status: renderStatus("Active"),
      action: <CustomDropdown userId={3} />,
    },
  ];

  return (
    <div>
      <BasicTable
        title="Users Management"
        columns={columns}
        data={data}
        showPagination={true}
        showDatePicker={false}
      />
    </div>
  );
};

export default User;
