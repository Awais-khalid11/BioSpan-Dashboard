import { FaHome, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { id: 1, name: "Dashboard", icon: FaHome, link: "/" },
    { id: 2, name: "Settings", icon: FaCog, link: "/settings" },
  ];

  return (
    <div className="h-[calc(100vh-32px)] mt-4 ml-4 w-64 bg-gradient-to-b from-[#00230f] to-[#051d16] text-white px-5 py-6 flex flex-col rounded-l-2xl shadow-lg z-50">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-2xl font-extrabold text-lime-400">Bio</span>
        <span className="text-2xl font-semibold">Span</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map(({ id, name, icon: Icon, link }) => (
          <NavLink
            key={id}
            to={link}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-lime-400 text-black font-semibold"
                  : "hover:bg-white/10"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>

      <button className="mt-auto bg-red-700 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-600">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 002 2h4a2 2 0 002-2v-1m-6 0V5m0 0V4a2 2 0 00-2-2H9a2 2 0 00-2 2v1"
          />
        </svg>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

