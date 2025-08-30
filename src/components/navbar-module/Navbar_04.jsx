import { cn } from "@/lib/utils";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Users, Building2 } from "lucide-react";
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

// Variant 4: Professional Corporate
const Navbar04 = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const [mobileSubmenu, setMobileSubmenu] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
            ? "bg-white shadow-lg border-b-4 border-blue-900"
            : "bg-white/95 backdrop-blur-md shadow-md"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="font-bold text-xl text-blue-900">SIGA</div>
                <div className="text-xs text-gray-600 -mt-1">Professional Network</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
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
                        "flex items-center space-x-1 px-3 py-2 font-semibold text-sm transition-all duration-200 relative group",
                        isActive(item.href)
                          ? "text-blue-900"
                          : "text-gray-700 hover:text-blue-900"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                      <div className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-blue-900 transition-all duration-300",
                        hoveredItem === index ? "w-full" : "w-0"
                      )}></div>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className={cn(
                        "px-3 py-2 font-semibold text-sm transition-all duration-200 relative group block",
                        isActive(item.href)
                          ? "text-blue-900"
                          : "text-gray-700 hover:text-blue-900"
                      )}
                    >
                      <span>{item.name}</span>
                      <div className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-blue-900 transition-all duration-300",
                        isActive(item.href) ? "w-full" : hoveredItem === index ? "w-full" : "w-0"
                      )}></div>
                    </Link>
                  )}

                  {/* Submenu */}
                  {item.subItems && showSubmenu && hoveredItem === index && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-1"></div>
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(subItem.href);
                          }}
                          className="block px-6 py-3 text-sm text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200 font-medium border-b border-gray-100 last:border-b-0"
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
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={() => handleNavigation("/become-member")}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
              >
                BECOME MEMBER
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {menuState ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 lg:hidden transition-all duration-500",
            menuState
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="bg-white h-full">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-1"></div>
            <div className="flex flex-col h-full pt-24 px-6 pb-6">
              <div className="flex-1 space-y-1">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === index ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-left font-bold text-gray-900 hover:bg-blue-50 rounded-lg transition-colors duration-200 border-l-4 border-transparent hover:border-blue-900"
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform duration-300",
                              mobileSubmenu === index && "rotate-180"
                            )}
                          />
                        </button>
                        {mobileSubmenu === index && (
                          <div className="ml-6 mt-2 space-y-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavigation(subItem.href);
                                }}
                                className="block p-3 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-semibold border-l-2 border-gray-300 hover:border-blue-900"
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
                          "block p-4 font-bold rounded-lg transition-all duration-200 border-l-4",
                          isActive(item.href)
                            ? "text-blue-900 bg-blue-50 border-blue-900"
                            : "text-gray-900 hover:text-blue-900 hover:bg-blue-50 border-transparent hover:border-blue-900"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t-2 border-gray-200">
                <Button
                  onClick={() => handleNavigation("/become-member")}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-4 rounded-lg font-bold text-lg shadow-lg"
                >
                  BECOME MEMBER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar04;