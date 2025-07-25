import { ReactSVG } from "react-svg";

const Navbar = () => {
  return (
    <div className=" mt-4 mr-4 ml-2 h-20 bg-white rounded-r-2xl px-6 flex justify-between items-center shadow-lg">
      {/* Left Section */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-black hidden md:block">
          👋 Hey! John Doe
        </h1>
        <p className="text-sm text-gray-600 hidden md:block">
          Track growth, manage users, and optimize health protocols.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-auto">
        <div className="hidden sm:block w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <ReactSVG src="/assets/icons/notification.svg" className="w-6 h-6" />
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </div>
  );
};

export default Navbar;

