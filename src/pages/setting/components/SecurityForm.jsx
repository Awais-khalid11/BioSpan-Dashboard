import React, { useState } from "react";
import Selector from "../../../components/Selector";
import BasicTable from "../../../components/BasicTable";
import { TiDownloadOutline } from "react-icons/ti";

const getStatusBadge = (value) => (
  <span
    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
      value === "Success"
        ? "bg-green-100 text-green-800"
        : "bg-red-100 text-red-800"
    }`}
  >
    {value === "Success" ? (
      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    ) : (
      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    )}
    {value}
  </span>
);

const SecurityForm = () => {
  const [selectedAdminRole, setSelectedAdminRole] = useState("superadmin");
  const [selectedNewAdmin, setSelectedNewAdmin] = useState(
    "newmember@gmail.com"
  );
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  const adminRoleOptions = [
    { label: "Super Admin", value: "superadmin" },
    { label: "Admin", value: "admin" },
    { label: "Moderator", value: "moderator" },
  ];

  const newAdminOptions = [
    { label: "newmember@gmail.com", value: "newmember@gmail.com" },
    { label: "admin@company.com", value: "admin@company.com" },
    { label: "manager@company.com", value: "manager@company.com" },
  ];

  const activityLogs = [
    {
      id: 1,
      promptTrigger: "John Doe",
      aiResponse: "2025-07-18 09:32 AM",
      goals: "192.168.0.12",
      createdOn: "Chrome - Windows 10",
      status: getStatusBadge("Success"),
    },
    {
      id: 2,
      promptTrigger: "Sarah Smith",
      aiResponse: "2025-07-18 07:14 AM",
      goals: "10.0.2.45",
      createdOn: "Safari - iPhone",
      status: getStatusBadge("Success"),
    },
    {
      id: 3,
      promptTrigger: "Mark Johnson",
      aiResponse: "2025-07-17 11:51 PM",
      goals: "172.16.1.101",
      createdOn: "Firefox - MacOS",
      status: getStatusBadge("Failed"),
    },
    {
      id: 4,
      promptTrigger: "Amanda Lee",
      aiResponse: "2025-07-17 09:23 PM",
      goals: "192.168.1.5",
      createdOn: "Chrome - Android",
      status: getStatusBadge("Success"),
    },
  ];

  const columns = [
    { key: "promptTrigger", label: "Prompt/Trigger", sortable: true },
    { key: "aiResponse", label: "AI Response", sortable: true },
    { key: "goals", label: "Goals", sortable: false },
    { key: "createdOn", label: "Created On", sortable: true },
    { key: "status", label: "Status", sortable: true },
  ];

  const toggleTwoFactor = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Security settings saved:", {
      selectedAdminRole,
      selectedNewAdmin,
      twoFactorAuth,
    });
    alert("Security settings saved successfully!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Security</h1>

      <div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Selector
                label="Admin Roles"
                options={adminRoleOptions}
                value={selectedAdminRole}
                onChange={setSelectedAdminRole}
              />
            </div>

            <div>
              <Selector
                label="Add New Admin"
                options={newAdminOptions}
                value={selectedNewAdmin}
                onChange={setSelectedNewAdmin}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Two-Factor Authentication
            </h3>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50">
              <span className="text-sm text-gray-600">
                Select "Active" to Activate Two-Factor Authentication or
                "Inactive" to Disabled it.
              </span>
              <button
                type="button"
                onClick={toggleTwoFactor}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                  twoFactorAuth ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    twoFactorAuth ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <BasicTable
          title=""
          columns={columns}
          data={activityLogs}
          showPagination={true}
          showDatePicker={false}
          showSearch={false}
          showFilter={false}
          filterButtonText=""
          itemsPerPage={5}
        />
        <div className="flex items-center gap-3 mt-5">
          <button
            type="button"
            className="w-[20%] px-6 py-[17px] rounded-[12px] border border-[#252525] text-sm font-extrabold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-[80%] bg-[#072723] flex gap-1.5 items-center justify-center text-white px-6 py-[17px] rounded-[12px] border text-sm font-extrabold"
          >
            <TiDownloadOutline />
            Export as CSV /PDf
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityForm;
