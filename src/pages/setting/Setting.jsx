import React, { useState } from "react";
import SettingsTabs from "./components/SettingsTab";
import GeneralSettingsForm from "./components/GeneralSettingForm";
import UserPermissionsForm from "./components/UserPermissionForm";
import NotificationsForm from "./components/NotificationForm";
import SecurityForm from "./components/SecurityForm";
import TestModeForm from "./components/TestModeForm";

const Setting = () => {
  const tabs = [
    "General Settings",
    "User Permissions",
    "Notifications",
    "Security",
    "Test Mode",
  ];
  const [activeTab, setActiveTab] = useState("General Settings");
  const [selectedGoal, setSelectedGoal] = useState("fat_loss");
  const [status, setStatus] = useState("Active");

  const toggleStatus = () => {
    setStatus((prev) => (prev === "Active" ? "Hidden" : "Active"));
  };

  const renderForm = () => {
    switch (activeTab) {
      case "General Settings":
        return (
          <GeneralSettingsForm
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
            status={status}
            toggleStatus={toggleStatus}
          />
        );
      case "User Permissions":
        return <UserPermissionsForm />;
      case "Notifications":
        return <NotificationsForm />;
      case "Security":
        return <SecurityForm />;
      case "Test Mode":
        return <TestModeForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="text-[25px] font-bold text-black leading-[1]">Settings</h1>

      <div className="flex gap-3 items-center my-4 flex-wrap">
        {tabs.map((tab) => (
          <SettingsTabs
            key={tab}
            tabText={tab}
            selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      <div className="bg-white rounded-[12px] border border-[#0000001A] p-5">
        {renderForm()}
      </div>
    </div>
  );
};

export default Setting;
