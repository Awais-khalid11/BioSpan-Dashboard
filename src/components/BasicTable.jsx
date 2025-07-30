import { IoFilterOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import DropDownButton from "./DropDownButton";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiInboxIn } from "react-icons/ci";

const BasicTable = ({
  title,
  columns,
  data,
  showSearch = true,
  showFilter = true,
  showPagination = false,
  showDatePicker = false,
  filterButtonText = "Filters",
  itemsPerPage = 10,
  showExportBtn = false,
   customButton,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filterOptions = [
    { label: "All Users", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (option) => {
    console.log("Selected Filter:", option);
  };

const filteredData = data.filter((row) =>
  Object.values(row).some((value) =>
    String(value).toLowerCase().includes(searchTerm.toLowerCase())
  )
);


  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = showPagination
    ? filteredData.slice(startIndex, endIndex)
    : filteredData;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="text-[25px] font-bold text-black mb-4 sm:mb-0">
          <h1 className="leading-[1]">{title}</h1>
        </div>

       {(showSearch || showFilter || customButton) && (
  <div className="flex items-center gap-2.5">
    {showSearch && (
      <div className="relative w-[429px] bg-white">
        <input
          type="search"
          name="tablesearch"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full rounded-[8px] border border-[#2525251A] px-3.5 py-2.5 pl-10 leading-[1]"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
      </div>
    )}
    
    {showFilter && (
      <div className="bg-white">
        <DropDownButton
          btnText={filterButtonText}
          btnIcon={<IoFilterOutline className="text-lime-400" />}
          options={filterOptions}
          onSelect={handleFilterChange}
        />
      </div>
    )}

    {customButton && (
      <div className="bg-white">{customButton}</div>
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
            {currentData.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="text-[#252525CC] even:bg-[#F7F7F7] even:rounded-[10px]"
              >
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

        {showExportBtn && (
          <button className="w-full mt-4 bg-[#072723] flex justify-center items-center gap-2.5 rounded-[12px] text-white text-center py-2.5 px-4">
            <CiInboxIn />
            Export CSV
          </button>
        )}

        {showPagination && totalPages > 1 && (
          <div className="flex items-center justify-between mt-4 px-4 py-3 border-t border-[#0000001A]">
            <div className="flex items-center gap-1">
              Page
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === "number" && goToPage(page)}
                  disabled={page === "..."}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    page === currentPage
                      ? "bg-blue-600 text-white"
                      : page === "..."
                      ? "text-gray-400 cursor-default"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 bg-[white] px-3 py-1.5 text-sm rounded-md transition-colors ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-[#252525]  hover:bg-gray-100"
                }`}
              >
                Previous
              </button>

              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-md transition-colors ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicTable;
