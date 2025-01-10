import React, { useState } from "react";
import Logo from "../assets/images/Aventisia V1.png";
import Profile from "../assets/images/profile.png";
import { FaBell, FaHeart } from "react-icons/fa";
import { useTable, usePagination, useSortBy } from "react-table";
import CreateModelModal from "../components/CreateModelModal";

const Table = () => {
  const data = React.useMemo(
    () => [
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Sam Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "John Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
      {
        modelName: "Blonde Drizzle",
        type: "Extraction",
        description: "Edit Customer",
        createdon: "29/02/2024",
        lasttrainedon: "29/02/2024",
        status: "Active",
        action: "...",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Model Name", accessor: "modelName" },
      { Header: "Model Type", accessor: "type" },
      { Header: "Description", accessor: "description" },
      { Header: "Created On", accessor: "createdon" },
      { Header: "Last Trained On", accessor: "lasttrainedon" },
      { Header: "Status", accessor: "status" },
      { Header: "Action", accessor: "action" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useSortBy,
    usePagination
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="p-6">
      <div className="p-6 flex flex-col items-end">
        <div className="w-full flex justify-end mb-4">
          <div className="flex items-center w-1/3 ml-5 mr-6 border rounded-lg bg-white">
            <span className="pl-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m2.85-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            </span>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search by Name, ID"
              className="w-full p-2 rounded-lg text-black outline-none pl-2"
            />
          </div>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            onClick={toggleModal}
          >
            Create New Model
          </button>
        </div>

        {/* Modal Component */}
        {isModalOpen && <CreateModelModal closeModal={toggleModal} />}
      </div>

      <div className="mt-1">
        <table
          {...getTableProps()}
          className="table-auto w-full border border-gray-300"
          aria-label="Data Table"
        >
          <thead className="bg-gray-200">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="p-4 border text-left font-semibold"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border-t">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="p-4">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="mt-4 flex justify-between items-center">
          <div className="text-gray-700">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </div>
          <div>
            <button
              onClick={previousPage}
              disabled={!canPreviousPage}
              className={`px-4 py-2 rounded mr-2 ${
                canPreviousPage
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={!canNextPage}
              className={`px-4 py-2 rounded ${
                canNextPage
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex">
      {/* Vertical Navbar */}
      <div className="bg-white-800 text-black w-64 h-screen flex flex-col items-center py-4">
        {/* Logo/Image */}
        <img
          src={Logo} // Use the imported image
          alt="Logo"
          className="w-25 h-25 rounded-full mb-3"
        />

        {/* Menu Items */}
        <ul className="space-y-6 text-center w-full">
          <li className="hover:bg-white-700 p-2 cursor-pointer flex items-center space-x-2">
            <i className="fas fa-book"></i>{" "}
            {/* Replace with the desired Font Awesome icon */}
            <span>Model Library</span>
          </li>
          <li className="hover:bg-white-700 p-2 cursor-pointer flex items-center space-x-2">
            <i className="fas fa-tag"></i> {/* Label Data Icon */}
            <span>Label Data</span>
          </li>
          <li className="hover:bg-white-700 p-2 cursor-pointer flex items-center space-x-2">
            <i className="fas fa-brain"></i> {/* Model Icon */}
            <span>Model</span>
          </li>
          <li className="hover:bg-white-700 p-2 cursor-pointer flex items-center space-x-2">
            <i className="fas fa-vial"></i> {/* Test Icon */}
            <span>Test</span>
          </li>
          <li className="hover:bg-white-700 p-2 cursor-pointer flex items-center space-x-2">
            <i className="fas fa-question-circle"></i> {/* Help Icon */}
            <span>Help</span>
          </li>
          <li className="hover:bg-white-700 p-2 cursor-pointer flex items-center space-x-2">
            <i className="fas fa-cog"></i> {/* Setting Icon */}
            <span>Setting</span>
          </li>
          <li className="hover:bg-white-700 p-2 cursor-pointer flex items-center space-x-2">
            <i className="fas fa-life-ring"></i> {/* Support Icon */}
            <span>Support</span>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Horizontal Navbar */}
        <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">AI/ML Model Builder</h1>

          {/* Search Bar */}
          <div className="flex items-center w-1/3 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-lg text-black outline-none"
            />
          </div>

          {/* Right Section: Icons and Profile */}
          <div className="flex items-center space-x-4">
            <FaBell className="cursor-pointer text-xl" />
            <FaHeart className="cursor-pointer text-xl" />
            <span className="mr-2">Neurotic Spy</span>
            <img
              src={Profile}
              alt="Profile"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>

        {/* Table Component */}
        <Table />
      </div>
    </div>
  );
};

export default Navbar;
