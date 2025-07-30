import React, { useState } from "react";

const NotificationForm = () => {
  const [notifications, setNotifications] = useState({
    newUserSignup: true,
    bioScoreDrop: true,
    protocolNotSynced: false,
    dailySummary: false,
    weeklyReports: true,
  });

  const toggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div>
      <form>
        <h3 className="text-[20px] font-bold text-black mb-4">Notifications</h3>

        <div className="mb-6">
          <label className="block text-[16px] font-semibold mb-3">
            Send Admin Alerts For:
          </label>
          <div className="flex gap-4 flex-wrap">
            {[
              { key: "newUserSignup", label: "New User Signup" },
              { key: "bioScoreDrop", label: "BioScore Drop" },
              { key: "protocolNotSynced", label: "Protocol Not Synced" },
            ].map(({ key, label }) => (
              <div
                key={key}
                className={`flex items-center justify-between px-4 py-3 rounded-[12px] border w-[32%] ${
                  notifications[key] ? "border-green-500" : "border-[#ccc]"
                }`}
              >
                <span className="text-sm text-[#252525]">{label}</span>
                <button
                  type="button"
                  onClick={() => toggle(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    notifications[key] ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications[key] ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-6">
          {[
            {
              key: "dailySummary",
              label: "Daily Summary Email",
              description:
                "Select “Active” to show this Daily Summary email or “Inactive” to hide it.",
            },
            {
              key: "weeklyReports",
              label: "Weekly Reports",
              description:
                "Select “Active” to show this Weekly Reports or “Inactive” to hide it.",
            },
          ].map(({ key, label, description }) => (
            <div key={key}>
              <label className="block text-[15px] font-semibold text-[#323232] mb-2">
                {label}
              </label>
              <div className="flex items-center justify-between py-4 px-5 rounded-[12px] border border-[#2525251A] bg-white">
                <span className="text-sm text-[#252525] opacity-50">
                  {description}
                </span>
                <button
                  type="button"
                  onClick={() => toggle(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    notifications[key] ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications[key] ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-[20%] px-6 py-[17px] rounded-[12px] border border-[#252525] text-sm font-extrabold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-[80%] bg-[#072723] text-white px-6 py-[17px] rounded-[12px] border text-sm font-extrabold"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotificationForm;
