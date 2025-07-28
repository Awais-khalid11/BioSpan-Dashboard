import {  FaCapsules  } from "react-icons/fa";
import { MdOutlineDashboard , MdSecurity } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaRankingStar } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";





import { NavLink } from "react-router-dom";
import BgNav from "../../public/assets/images/bgnav.png";

const Sidebar = () => {
  const navItems = [
    { id: 1, name: "Dashboard", icon: MdOutlineDashboard, link: "/" },
    { id: 2, name: "User", icon: CiUser, link: "/user" },
    { id: 3, name: "Supplements", icon: FaCapsules , link: "/supplements" },
    { id: 4, name: "BioScore Logs", icon: FaRankingStar , link: "/bioScore" },
    { id: 5, name: "AI Coach", icon: HiOutlineSparkles  , link: "/aicoach" },
    { id: 6, name: "Protocols", icon: MdSecurity   , link: "/protocols" },
    { id: 7, name: "Settings", icon: IoSettingsOutline   , link: "/settings" },
  ];

  return (
    <div className="bg-gray-50 pl-2.5 py-2.5">
      <div
        className="h-[calc(100vh-32px)] w-64 text-white px-5 py-6 flex flex-col rounded-[10px] z-50 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${BgNav})` }}
      >
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
              `flex items-center gap-3 px-4 py-2 rounded-lg transition border border-[#FFFFFF33] ${
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
    </div>
  );
};

export default Sidebar;

