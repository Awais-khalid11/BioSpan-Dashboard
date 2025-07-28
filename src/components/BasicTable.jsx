import { IoFilterOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import DropDownButton from "./DropDownButton";
import { useState } from "react";

const BasicTable = ({ title, columns, data, showSearch = true, showFilter = true }) => {
  const filterOptions = [
    { label: "All Users", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (option) => {
    console.log("Selected Filter:", option);
  };

  const filteredData = data.filter((row) =>
    Object.values(row.raw || {}).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="text-[25px] font-bold text-black mb-4 sm:mb-0">
          <h1 className="leading-[1]">{title}</h1>
        </div>
        {(showSearch || showFilter) && (
          <div className="flex items-center gap-2.5">
            {showSearch && (
              <div className="relative w-[429px]">
                <input
                  type="search"
                  name="tablesearch"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-[8px] border border-[#2525251A] px-3.5 py-2.5 pl-10 leading-[1]"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              </div>
            )}

            {showFilter && (
              <DropDownButton
                btnText="Filters"
                btnIcon={<IoFilterOutline className="text-lime-400" />}
                options={filterOptions}
                onSelect={handleFilterChange}
              />
            )}
          </div>
        )}
      </div>

      <div className="p-2.5 rounded-[12px] border border-[#0000001A] bg-white">
        <table className="w-full">
          <thead className="bg-[#F2F8EB] py-3.5 px-2.5 rounded-b-4xl border border-[#0000001A]">
            <tr className="rounded-2xl border border-[#0000001A]">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className="p-3 text-left bold text-[#072723] text-[12px] leading-[1.5]"
                >
                  <h3>{col.label}</h3>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIdx) => (
              <tr key={rowIdx} className="text-[#252525CC]">
                {columns.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    className="px-4 py-3 text-[12px] leading-[1.5]"
                  >
                    <h5>{row[col.key]}</h5>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicTable;
