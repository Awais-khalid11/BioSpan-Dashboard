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
import DropDownButton from "../components/DropDownButton";
import Avatar from "../../public/assets/images/Avatar.png";
import { useNavigate } from "react-router-dom";

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
  { label: "Goals", key: "goals" },
  { label: "BioScore", key: "bioscore" },
  { label: "Wearables", key: "wearables" },
  { label: "Plans", key: "plans" },
  { label: "Status", key: "status" },
  { label: "Action", key: "action" },
];

const User = () => {
  const navigate = useNavigate();

  const renderAction = (userId) => {
    const actionOptions = [
      {
        label: (
          <button
            className="cursor-pointer w-full"
            onClick={() => navigate(`/user-detail/${userId}`)}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-gray-600" />
                <span>View</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </button>
        ),
        value: "view",
      },
      {
        label: (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Active</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        ),
        value: "edit",
      },
      {
        label: (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-red-500" />
              <span className="text-red-500">Delete</span>
            </div>
          </div>
        ),
        value: "delete",
      },
    ];

    const handleActionSelect = (option) => {
      console.log("Action selected:", option);
    };

    return (
      <DropDownButton
        btnText=""
        btnIcon={<MoreVertical className="h-4 w-4 text-gray-600" />}
        options={actionOptions}
        onSelect={handleActionSelect}
      />
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
      status: renderStatus("Active"),
      action: renderAction(1),
      raw: {
        user: "Lydia Press hello@hourglassinc.com",
        goals: "Fat Loss",
        bioscore: "76.2",
        wearables: "Yes",
        plans: "Free",
        status: "Active",
      },
    },
    {
      id: "2",
      user: renderUser("Jonas K", "jk@hourglassinc.com"),
      goals: "Muscle Gain",
      bioscore: "88.1",
      wearables: renderWearables("No"),
      plans: renderPlans("Premium"),
      status: renderStatus("Blocked"),
      action: renderAction(2),
      raw: {
        user: "Jonas K jk@hourglassinc.com",
        goals: "Muscle Gain",
        bioscore: "88.1",
        wearables: "No",
        plans: "Premium",
        status: "Blocked",
      },
    },
    {
      id: "3",
      user: renderUser("Emily Stone", "emily@hourglassinc.com"),
      goals: "Endurance",
      bioscore: "67.9",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Premium"),
      status: renderStatus("Active"),
      action: renderAction(3),
      raw: {
        user: "Emily Stone emily@hourglassinc.com",
        goals: "Endurance",
        bioscore: "67.9",
        wearables: "Yes",
        plans: "Premium",
        status: "Active",
      },
    },
    {
      id: "4",
      user: renderUser("Emily Stone", "emily@hourglassinc.com"),
      goals: "Endurance",
      bioscore: "67.9",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Premium"),
      status: renderStatus("Active"),
      action: renderAction(3),
      raw: {
        user: "Emily Stone emily@hourglassinc.com",
        goals: "Endurance",
        bioscore: "67.9",
        wearables: "Yes",
        plans: "Premium",
        status: "Active",
      },
    },
    {
      id: "5",
      user: renderUser("Emily Stone", "emily@hourglassinc.com"),
      goals: "Endurance",
      bioscore: "67.9",
      wearables: renderWearables("Yes"),
      plans: renderPlans("Premium"),
      status: renderStatus("Active"),
      action: renderAction(3),
      raw: {
        user: "Emily Stone emily@hourglassinc.com",
        goals: "Endurance",
        bioscore: "67.9",
        wearables: "Yes",
        plans: "Premium",
        status: "Active",
      },
    },
  ];

  return (
    <div>
      <BasicTable title="Users Management" columns={columns} data={data} 
      showPagination={true} 
        showDatePicker={false} 

         />
    </div>
  );
};

export default User;
