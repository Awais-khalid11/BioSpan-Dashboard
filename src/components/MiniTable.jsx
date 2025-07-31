import React from "react";
import { Calendar, Activity, Shield } from "lucide-react";

const tableData = [
  {
    date: "July 14",
    event: "BioScore Check",
    details: "Scored 76.2",
  },
  {
    date: "July 12",
    event: "Goal Updated",
    details: "From Sleep → Fat Loss",
  },
  {
    date: "July 11",
    event: "Goal Updated",
    details: "Longevity → From Sleep",
  },
  {
    date: "July 10",
    event: "Wearable Sync",
    details: "Apple Watch connected",
  },
];

const headers = [
  { icon: Calendar, label: "Date" },
  { icon: Activity, label: "Event Type" },
  { icon: Shield, label: "Details" },
];

const MiniTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[600px]">
        {" "}
        {/* Set minimum width to prevent squeezing */}
        <table className="w-full mt-5">
          <thead>
            <tr className="bg-[#F2F8EB] rounded-lg">
              {headers.map((header, index) => {
                const Icon = header.icon;
                return (
                  <th
                    key={index}
                    className={`text-left p-4 text-sm font-medium text-gray-700 whitespace-nowrap ${
                      index === 0
                        ? "rounded-l-lg"
                        : index === headers.length - 1
                        ? "rounded-r-lg"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {header.label}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 even:bg-[#F7F7F7]"
              >
                <td className="p-4 text-sm text-gray-900 whitespace-nowrap">
                  {row.date}
                </td>
                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                  {row.event}
                </td>
                <td className="p-4 text-sm text-gray-700 whitespace-nowrap">
                  {row.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MiniTable;
