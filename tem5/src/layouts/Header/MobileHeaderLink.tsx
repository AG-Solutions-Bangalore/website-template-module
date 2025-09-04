import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { HeaderItem } from "../../types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: string | null;
  setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({
  item,
  setNavbarOpen,
  openMenu,
  setOpenMenu,
}) => {
  const location = useLocation();
  const path = location.pathname;

  const isOpen = openMenu === item.label;

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setOpenMenu(isOpen ? null : item.label); // close if open, otherwise open
    } else {
      setNavbarOpen(false);
    }
  };

  return (
    <div className="relative w-full">
      <Link
        to={item.href}
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-2 px-3 rounded-md text-black dark:text-white focus:outline-hidden ${
          path === item.href
            ? "bg-primary text-white! dark:bg-primary dark:text-white"
            : ""
        } ${
          path.startsWith(`/${item.label.toLowerCase()}`)
            ? "bg-primary text-white! dark:bg-primary dark:text-white"
            : ""
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {isOpen && item.submenu && (
        <div className="bg-white dark:bg-darkmode p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href}
              onClick={() => setNavbarOpen(false)}
              className={`block py-2 px-3 text-gray-500 hover:bg-gray-200 ${
                path === subItem.href ? "text-primary!" : ""
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
