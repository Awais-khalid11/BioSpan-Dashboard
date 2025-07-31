import React, { useState } from "react";
import Selector from "../../../components/Selector";

const modules = [
  "Users",
  "Supplements",
  "Protocols",
  "AI Coach",
  "BioScore Logs",
  "Settings",
];

const actions = ["View", "Create", "Edit", "Delete"];

const UserPermissionForm = () => {
  const [selectedGoal, setSelectedGoal] = useState("english");

  const timeOptions = [
    { label: "Super Admin", value: "superadmin" },
    { label: "Admin", value: "admin" },
    { label: "+7 GMT", value: "+7 GMT" },
  ];

  const goalOptions = [
    { label: "newmember@gmail.com", value: "englis" },
    { label: "newmember@gmail.com", value: "spanish" },
    { label: "Aranewmember@gmail.combic", value: "arabic" },
  ];

  const [permissions, setPermissions] = useState(() =>
    modules.reduce((acc, module) => {
      acc[module] = {
        View: true,
        Create: false,
        Edit: true,
        Delete: false,
      };
      return acc;
    }, {})
  );

  const togglePermission = (module, action) => {
    setPermissions((prev) => ({
      ...prev,
      [module]: {
        ...prev[module],
        [action]: !prev[module][action],
      },
    }));
  };

  return (
    <div>
      <h3 className="text-[20px] font-bold text-black mb-4">
        User Permissions
      </h3>

      <div className="flex flex-wrap gap-5 mb-5 md:gap-2">
        <div className="w-full md:w-[49%]">
          <Selector
            label="Admin Roles"
            options={timeOptions}
            value={selectedGoal}
            onChange={setSelectedGoal}
          />
        </div>

        <div className="w-full md:w-[49%]">
          <Selector
            label="Add New Admin"
            options={goalOptions}
            value={selectedGoal}
            onChange={setSelectedGoal}
          />
        </div>
      </div>

      <div className="overflow-auto border border-[#f1f1f1] rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-[#F2F8EB] text-[#072723] text-[12px] font-bold">
            <tr>
              <th className="p-3 font-semibold">
                <h5>Module</h5>
              </th>
              {actions.map((action) => (
                <th key={action} className="p-3 font-semibold">
                  <h5>{action}</h5>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {modules.map((module, i) => (
              <tr key={module} className={i % 2 === 1 ? "bg-[#FAFAFA]" : ""}>
                <td className="py-4 px-[15px] font-bold text-[12px] text-[#252525CC]">
                  <h5>{module}</h5>
                </td>
                {actions.map((action) => (
                  <td key={action} className="py-4 px-[15px] text-green-500 ">
                    <input
                      type="checkbox"
                      checked={permissions[module][action]}
                      onChange={() => togglePermission(module, action)}
                      className="w-5 h-5 text-green-500 border-[#0EA363] rounded bg-[#DEFCEF]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" flex flex-wrap  gap-2.5 mt-5">
          <button
            type="button"
            className="w-full md:w-[19%] px-6 py-[17px] rounded-[12px] border border-[#252525] text-sm font-extrabold"
          >
            <h4>Cancel</h4>
          </button>

          <button
            type="submit"
            className="w-full md:w-[79%] bg-[#072723] text-white px-6 py-[17px] rounded-[12px] border border-[#252525] text-sm font-extrabold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPermissionForm;
