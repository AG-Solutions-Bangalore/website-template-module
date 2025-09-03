import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type { HeaderItem } from "../../types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({
  item,
  setNavbarOpen,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();

  const handleToggle = (e: React.MouseEvent) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    } else {
      setNavbarOpen(false); // ✅ close drawer on normal item
    }
  };

  const path = location.pathname;

  return (
    <div className="relative w-full">
      <Link
        to={item.href}
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-2 text-black dark:text-white focus:outline-none
          ${item.href === path ? "!text-primary dark:!text-primary" : ""}
        `}
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

      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href}
              onClick={() => setNavbarOpen(false)} // ✅ close drawer on submenu click
              className="block py-2 text-gray-500 hover:bg-gray-200"
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
