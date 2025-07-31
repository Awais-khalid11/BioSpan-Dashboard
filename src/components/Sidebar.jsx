import { NavLink } from "react-router-dom";
import BgNav from "../../public/assets/images/bgnav.png";
import { ReactSVG } from "react-svg";
import { FiX } from "react-icons/fi";
import { useState } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    {
      id: 1,
      name: "Dashboard",
      iconA: "/assets/icons/dashboard-a.svg",
      iconB: "/assets/icons/dashboard-b.svg",
      link: "/dashboard",
    },
    {
      id: 2,
      name: "User",
      iconA: "/assets/icons/user-a.svg",
      iconB: "/assets/icons/user-b.svg",
      link: "/user",
    },
    {
      id: 3,
      name: "Supplements",
      iconA: "/assets/icons/supplements-a.svg",
      iconB: "/assets/icons/supplements-b.svg",
      link: "/supplements",
    },
    {
      id: 4,
      name: "BioScore Logs",
      iconA: "/assets/icons/bio-a.svg",
      iconB: "/assets/icons/bio-b.svg",
      link: "/bioScore",
    },
    {
      id: 5,
      name: "AI Coach",
      iconA: "/assets/icons/ai-a.svg",
      iconB: "/assets/icons/ai-b.svg",
      link: "/aicoach",
    },
    {
      id: 6,
      name: "Protocols",
      iconA: "/assets/icons/protocols-a.svg",
      iconB: "/assets/icons/protocols-b.svg",
      link: "/protocols",
    },
    {
      id: 7,
      name: "Settings",
      iconA: "/assets/icons/setting-a.svg",
      iconB: "/assets/icons/setting-b.svg",
      link: "/settings",
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )} */}

      <div
        className={`bg-gray-50 pl-2.5 py-2.5 fixed md:relative z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div
          className="h-[calc(100vh-32px)] w-64 text-white px-5 py-6 flex flex-col rounded-[10px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${BgNav})` }}
        >
          <div className="flex justify-center mb-8">
            <ReactSVG src="/assets/icons/Logo.svg" className="h-10 w-auto" />
            {/* <button className="md:hidden text-white" onClick={onClose}>
              <FiX size={24} />
            </button> */}
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map(({ id, name, iconA, iconB, link }) => (
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
                onClick={onClose}
              >
                {({ isActive }) => (
                  <>
                    <ReactSVG
                      src={isActive ? iconA : iconB}
                      className="w-5 h-5"
                    />
                    <span>{name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button className="mt-auto bg-red-800/20 text-red-600 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-600/45">
            <ReactSVG src="/assets/icons/logout.svg" className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
