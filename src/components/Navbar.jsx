import { ReactSVG } from "react-svg";

const Navbar = () => {
  return (
    <div className="h-25 rounded-[20px] bg-white m-2.5 px-6 flex justify-between items-center border border-[#00000012]">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-black hidden md:block">
          👋 Hey! John Doe
        </h1>
        <p className="text-sm text-gray-600 hidden md:block">
          Track growth, manage users, and optimize health protocols.
        </p>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="hidden sm:block w-64 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ReactSVG
              src="/assets/icons/search.svg"
              className="w-5 h-5 text-gray-400"
            />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm "
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
