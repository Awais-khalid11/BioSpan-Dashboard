import React, { useState } from "react";
import Input from "../../../components/Input";
import Selector from "../../../components/Selector";

const GeneralSettingForm = () => {
  const [selectedGoal, setSelectedGoal] = useState("english");
  const [notificationStatus, setNotificationStatus] = useState("Active");
  const [maintenanceStatus, setMaintenanceStatus] = useState("Active");

  const toggleNotification = () => {
    setNotificationStatus((prev) => (prev === "Active" ? "Hidden" : "Active"));
  };

  const toggleMaintenance = () => {
    setMaintenanceStatus((prev) => (prev === "Active" ? "Hidden" : "Active"));
  };

  const timeOptions = [
    { label: "+5 GMT", value: "+5 GMT" },
    { label: "+6 GMT", value: "+6 GMT" },
    { label: "+7 GMT", value: "+7 GMT" },
  ];

  const goalOptions = [
    { label: "English", value: "english" },
    { label: "Spanish", value: "spanish" },
    { label: "Arabic", value: "arabic" },
  ];

  return (
    <div>
      <form action="#">
        <h3 className="text-[20px] font-bold text-black mb-4">
          General Settings
        </h3>

        <div className="flex flex-wrap gap-5 mb-5 md:gap-2">
          <div className="w-full md:w-[49%]">
            <Input
              label="Platform Name"
              type="text"
              value="Sleep"
              id="platform-name"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <Selector
              label="Default Language"
              options={goalOptions}
              value={selectedGoal}
              onChange={setSelectedGoal}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-5 mb-5 md:gap-2">
          <div className="w-full md:w-[49%]">
            <Selector
              label="Time Zone"
              options={timeOptions}
              value={selectedGoal}
              onChange={setSelectedGoal}
            />
          </div>
          <div className="w-full md:w-[49%]">
            <Input
              label="Admin Email"
              type="text"
              value="adminpanel@gmail.com"
              id="admin-email"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-5 mb-5 md:gap-2">
          <div className="w-full md:w-[49%]">
            <label>
              <h3 className="text-[#323232] text-[15px] font-semibold">
                Notifications
              </h3>
            </label>
            <div className="flex flex-col md:flex-row mt-3.5 items-start md:items-center justify-between gap-4 py-4 px-5 rounded-[12px] border border-[#2525251A] bg-white">
              {" "}
              <span className="text-sm text-[#252525] opacity-50 mr-4">
                Select “Active” to show this Notification or “Inactive” to hide
                it.
              </span>
              <button
                type="button"
                onClick={toggleNotification}
                className={`relative inline-flex h-6 w-11  items-center rounded-full transition-colors ${
                  notificationStatus === "Active"
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4  transform rounded-full bg-white transition-transform ${
                    notificationStatus === "Active"
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="w-full md:w-[49%]">
            <label>
              <h3 className="text-[#323232] text-[15px] font-semibold">
                Maintenance Mode
              </h3>
            </label>
            <div className="flex flex-col md:flex-row mt-3.5 items-start md:items-center justify-between gap-4 py-4 px-5 rounded-[12px] border border-[#2525251A] bg-white">
              {" "}
              <span className="text-sm text-[#252525] opacity-50 mr-4">
                Select “Active” to show this Maintenance or “Inactive” to hide
                it.
              </span>
              <button
                type="button"
                onClick={toggleMaintenance}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  maintenanceStatus === "Active"
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    maintenanceStatus === "Active"
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2.5 w-full">
          <button
            type="button"
            className="w-full md:w-[20%] px-6 py-[17px] sm:px-5 sm:py-3 rounded-[12px] border border-[#252525] text-sm font-extrabold"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full md:w-[80%] bg-[#072723] text-white px-6 py-[17px] sm:px-5 sm:py-3 rounded-[12px] border border-[#252525] text-sm font-extrabold"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralSettingForm;
