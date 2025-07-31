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
  return (
    <div className="flex items-center gap-2">
      <div
        className={`inline-flex items-center p-[2px] text-xs gap-1 rounded-full ${
          hasWearables === "Yes" || hasWearables === true
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {hasWearables === "Yes" || hasWearables === true ? (
          <Check className="w-3 h-3" />
        ) : (
          <X className="w-3 h-3" />
        )}
      </div>
      {hasWearables === "Yes" || hasWearables === true ? "Yes" : "No"}
    </div>
  );
};

const renderStatus = (status) => {
  const statusStyles = {
    Normal: "bg-[#0676471A] text-[#067647] border-[#067647]",
    MissingData: "bg-[#F900001A] text-[#F90000] border-[#F90000]",
    Low: "bg-[#FFAF3F1A] text-[#FFAF3F] border-[#FFAF3F]",
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

const renderUser = (name, email) => {
  return (
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
  { label: "BioScore", key: "bioscore" },
  { label: "Devices", key: "devices" },
  { label: "Goals", key: "goals" },
  { label: "Dates", key: "dates" },
  { label: "Plans", key: "plans" },
  { label: "Status", key: "status" },
  { label: "Action", key: "action" },
];

const BioScore = () => {
  const navigate = useNavigate();
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRefs = useRef({});

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && !ref.contains(event.target)) {
          setOpenDropdownId(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderAction = (userId) => {
    const actionOptions = [
      {
        label: "HRV",
        value: "hrv",
        icon: <ChevronRight className="w-4 h-4 text-gray-400" />,
      },
      {
        label: "Sleep Score",
        value: "sleep-score",
        icon: <ChevronRight className="w-4 h-4 text-gray-400" />,
      },
    ];

    const handleActionSelect = (option) => {
      console.log("Action selected:", option);
      setOpenDropdownId(null);
    };

    return (
      <div
        className="relative"
        ref={(el) => (dropdownRefs.current[userId] = el)}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdownId(openDropdownId === userId ? null : userId);
          }}
          className="p-1 rounded hover:bg-gray-100"
        >
          <MoreVertical className="h-4 w-4 text-gray-600" />
        </button>

        {openDropdownId === userId && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
            <ul className="py-1 text-sm text-gray-700">
              {actionOptions.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleActionSelect(option)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between"
                  >
                    <span>{option.label}</span>
                    {option.icon}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const data = [
    {
      id: "1",
      user: renderUser("Lydia Press", "hello@hourglassinc.com"),
      goals: "Fat Loss",
      bioscore: "76.2",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Free"),
      status: renderStatus("Normal"),
      devices: "Fitbit",
      dates: "July 14",
      action: renderAction(1),
    },
    {
      id: "2",
      user: renderUser("Jonas K", "jk@hourglassinc.com"),
      goals: "Muscle Gain",
      bioscore: "88.1",
      wearables: renderWearables("No"),
      dates: "July 14",
      plans: renderPlans("Premium"),
      status: renderStatus("Normal"),
      action: renderAction(2),
      devices: "Fitbit",
    },
    {
      id: "3",
      user: renderUser("Emily Stone", "emily@hourglassinc.com"),
      goals: "Endurance",
      bioscore: "67.9",
      dates: "July 14",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Premium"),
      status: renderStatus("Low"),
      action: renderAction(3),
      devices: "Fitbit",
    },
    {
      id: "4",
      user: renderUser("Emily Stone", "emily@hourglassinc.com"),
      goals: "Endurance",
      bioscore: "67.9",
      dates: "July 14",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Premium"),
      status: renderStatus("Low"),
      action: renderAction(4),
      devices: "Apple Watch",
    },
    {
      id: "5",
      user: renderUser("Emily Stone", "emily@hourglassinc.com"),
      goals: "Endurance",
      bioscore: "67.9",
      dates: "July 14",
      devices: "Apple Watch",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Premium"),
      status: renderStatus("MissingData"),
      action: renderAction(5),
    },
  ];

  return (
    <div>
      <BasicTable
        title="BioScore Logs"
        columns={columns}
        data={data}
        showPagination={true}
        showDatePicker={true}
        filterButtonText="Filter by Goal & Plan"
        showExportBtn={true}
        showExtraIcon={true}
      />
    </div>
  );
};

export default BioScore;
