import { cn } from "@/lib/utils";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Users, Sparkles } from "lucide-react";
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

// Variant 3: Bold Gradient
const Navbar03 = () => {
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
      <nav className="fixed z-50 w-full">
        <div
          className={cn(
            "transition-all duration-500 ease-out",
            isScrolled
              ? "bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 shadow-2xl"
              : "bg-gradient-to-r from-purple-500/90 via-blue-500/90 to-teal-500/90 backdrop-blur-sm"
          )}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 opacity-80" />
                </div>
                <span className="font-bold text-xl text-white">SIGA</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-2">
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
                          "flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden",
                          isActive(item.href)
                            ? "text-white bg-white/20 shadow-lg"
                            : "text-white/90 hover:text-white hover:bg-white/15"
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                        {hoveredItem === index && (
                          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
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
                          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden block",
                          isActive(item.href)
                            ? "text-white bg-white/20 shadow-lg"
                            : "text-white/90 hover:text-white hover:bg-white/15"
                        )}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {hoveredItem === index && (
                          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                        )}
                      </Link>
                    )}

                    {/* Submenu */}
                    {item.subItems && showSubmenu && hoveredItem === index && (
                      <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border-0 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-1"></div>
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(subItem.href);
                            }}
                            className="block px-6 py-3 text-sm text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-200 font-medium"
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
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-2 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Become Member
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuState(!menuState)}
                className="lg:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200"
              >
                {menuState ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 lg:hidden transition-all duration-300",
            menuState ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 h-full">
            <div className="flex flex-col h-full pt-20 px-6 pb-6">
              <div className="flex-1 space-y-3">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === index ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-left font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
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
                                className="block p-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
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
                          "block p-4 font-semibold rounded-xl transition-all duration-300 border border-white/20",
                          isActive(item.href)
                            ? "text-white bg-white/20"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-white/20">
                <Button
                  onClick={() => handleNavigation("/become-member")}
                  className="w-full bg-white text-purple-600 hover:bg-gray-100 py-4 rounded-xl font-bold shadow-lg"
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

export default Navbar03;