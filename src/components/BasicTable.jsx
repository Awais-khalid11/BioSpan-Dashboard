import { IoFilterOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import DropDownButton from "./DropDownButton";
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiInboxIn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

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
  showExtraIcon = false,
  customButton,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tableContainerRef = useRef(null);

  const filterOptions = [
    { label: "All Users", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

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

  // Pagination functions remain the same
  const goToPage = (page) =>
    page >= 1 && page <= totalPages && setCurrentPage(page);
  const goToPrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
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
    <div className="w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-5 gap-4">
        <h1 className="text-xl md:text-[25px] font-bold text-black leading-[1]">
          {title}
        </h1>

        {(showSearch || showFilter || customButton) && (
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto">
            {showSearch && (
              <div className="relative w-full md:w-[250px] lg:w-[350px] bg-white">
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

            <div className="flex flex-row items-center gap-2.5">
              {showFilter && (
                <div className="bg-white rounded-[10px]">
                  <DropDownButton
                    btnText=""
                    btnIcon={
                      <div className="flex items-center gap-2">
                        <IoFilterOutline className="text-lime-400" />
                        <span className="text-gray-800 font-medium hidden md:inline">
                          {filterButtonText}
                        </span>
                        {showExtraIcon && (
                          <FaChevronDown className="text-black" />
                        )}
                      </div>
                    }
                    options={filterOptions}
                    onSelect={handleFilterChange}
                    position="right"
                  />
                </div>
              )}

              {showDatePicker && (
                <div className="relative bg-white flex-1 rounded-[8px] border border-[#2525251A]">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="w-full py-2.5 pl-11 pr-3.5 text-sm rounded-[8px] outline-none"
                    placeholderText="Pick a date"
                    dateFormat="yyyy-MM-dd"
                  />
                  <img
                    src="/assets/icons/calendar.svg"
                    alt="Calendar"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                  />
                </div>
              )}

              {customButton && <div className="bg-white">{customButton}</div>}
            </div>
          </div>
        )}
      </div>

      {/* Table Container with Horizontal Scroll on Mobile */}
      <div className="p-2.5 rounded-[12px] border border-[#0000001A] bg-white overflow-x-auto">
        <div className="min-w-[600px]">
          <table className="w-full">
            <thead className="bg-[#F2F8EB] py-3.5 px-2.5 rounded-b-4xl border border-[#0000001A]">
              <tr className="rounded-2xl border border-[#0000001A]">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className={`
            p-3 text-left bold text-[#072723] text-[12px] leading-[1.5] whitespace-nowrap
            ${
              idx === 0 ? "min-w-[200px] pr-8" : ""
            }  // First column wider with more right padding
            ${
              idx === 1 ? "min-w-[150px]" : ""
            }      // Second column minimum width
          `}
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
                      className={`
              px-4 py-3 text-[12px] leading-[1.5] whitespace-nowrap
              ${colIdx === 0 ? "min-w-[200px] pr-8" : ""}  // First column cell
              ${colIdx === 1 ? "min-w-[150px]" : ""}       // Second column cell
            `}
                    >
                      <h5>{row[col.key]}</h5>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showExportBtn && (
          <button className="w-full mt-4 bg-[#072723] flex justify-center items-center gap-2.5 rounded-[12px] text-white text-center py-2.5 px-4">
            <CiInboxIn />
            Export CSV
          </button>
        )}

        {showPagination && totalPages > 1 && (
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 px-4 py-3 border-t border-[#0000001A] gap-3">
            <div className="flex items-center gap-1 flex-wrap justify-center">
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
