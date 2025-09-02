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

// Variant 1: Modern Glassmorphism
const Navbar06 = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const [mobileSubmenu, setMobileSubmenu] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      <nav className="fixed z-50 w-full px-4 py-2">
        <div
          className={cn(
            "mx-auto max-w-7xl transition-all duration-500 ease-out",
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl shadow-black/5 px-6 py-2"
              : "bg-transparent px-6 py-4"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                SIGA
              </span>
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
                        "flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group",
                        isActive(item.href)
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          showSubmenu && hoveredItem === index && "rotate-180"
                        )}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group block",
                        isActive(item.href)
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  )}

                  {/* Desktop Submenu */}
                  {item.subItems && showSubmenu && hoveredItem === index && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(subItem.href);
                          }}
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 font-medium"
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Become Member
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
            "fixed inset-0 lg:hidden transition-all duration-300 ease-out",
            menuState
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col h-full pt-20 px-6 pb-6">
              <div className="flex-1 space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === index ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-left font-semibold text-gray-900 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300"
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
                          <div className="mt-2 ml-4 space-y-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavigation(subItem.href);
                                }}
                                className="block p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
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
                          "block p-4 font-semibold rounded-xl transition-all duration-300",
                          isActive(item.href)
                            ? "text-blue-600 bg-gradient-to-r from-blue-100 to-purple-100"
                            : "text-gray-900 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-200">
                <Button
                  onClick={() => handleNavigation("/become-member")}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold shadow-lg"
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

export default Navbar06;