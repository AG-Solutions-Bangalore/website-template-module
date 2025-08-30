

import { cn } from "@/lib/utils";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Users } from "lucide-react";
import { Button } from "../ui/button";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Event", href: "/event" },
  { name: "Service", href: "/service" },
  {
    name: "Others",
    href: "/other",
    subItems: [
      { name: "Efforts", href: "/efforts" },
      { name: "Gallery", href: "/gallery" },
      { name: "Directory", href: "/directory" },
      { name: "Managing Committee", href: "/committee" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

// Variant 2: Minimalist Clean
const Navbar02 = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const [mobileSubmenu, setMobileSubmenu] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [menuState]);

  const isActive = (href) => location.pathname === href;

  const handleNavigation = (href) => {
    navigate(href);
    setMenuState(false);
    setShowSubmenu(false);
    setMobileSubmenu(null);
  };

  return (
    <header>
      <nav
        className={cn(
          "fixed z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white shadow-sm border-b border-gray-100"
            : "bg-white/95 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-200">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900">SIGA</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredItem(index);
                    if (item.subItems) setShowSubmenu(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    if (item.subItems) setShowSubmenu(false);
                  }}
                >
                  {item.subItems ? (
                    <button
                      className={cn(
                        "flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 relative",
                        isActive(item.href)
                          ? "text-slate-900 bg-slate-100"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                      {isActive(item.href) && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-900 rounded-full"></div>
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 relative block",
                        isActive(item.href)
                          ? "text-slate-900 bg-slate-100"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      {item.name}
                      {isActive(item.href) && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-900 rounded-full"></div>
                      )}
                    </Link>
                  )}

                  {/* Submenu */}
                  {item.subItems && showSubmenu && hoveredItem === index && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(subItem.href);
                          }}
                          className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                onClick={() => handleNavigation("/become-member")}
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                Become Member
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            >
              {menuState ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 lg:hidden transition-all duration-300",
            menuState
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="bg-white h-full overflow-y-auto">
            <div className="px-6 pt-20 pb-6">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === index ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-left font-medium text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              mobileSubmenu === index && "rotate-180"
                            )}
                          />
                        </button>
                        {mobileSubmenu === index && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavigation(subItem.href);
                                }}
                                className="block p-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(item.href);
                        }}
                        className={cn(
                          "block p-4 font-medium rounded-lg transition-colors duration-200",
                          isActive(item.href)
                            ? "text-slate-900 bg-slate-100"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button
                  onClick={() => handleNavigation("/become-member")}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-lg font-medium"
                >
                  Become Member
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar02;