import { cn } from "@/lib/utils";
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Users, Zap, Star } from "lucide-react";
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

// Variant 5: Creative Animated
const Navbar05 = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [showSubmenu, setShowSubmenu] = React.useState(false);
  const [mobileSubmenu, setMobileSubmenu] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
      <nav className="fixed z-50 w-full px-4 py-3">
        <div
          className={cn(
            "mx-auto max-w-6xl transition-all duration-700 ease-out relative",
            isScrolled
              ? "bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl px-6 py-3 border border-slate-700/50"
              : "bg-slate-900/90 backdrop-blur-md rounded-3xl px-6 py-4"
          )}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <Star className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-bounce" />
                <Zap className="absolute -bottom-1 -left-1 w-4 h-4 text-cyan-400 opacity-80" />
              </div>
              <div>
                <div className="font-bold text-xl text-white">SIGA</div>
                <div className="text-xs text-cyan-300 -mt-1 font-medium">Innovation Hub</div>
              </div>
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
                        "flex items-center space-x-1 px-5 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group",
                        isActive(item.href)
                          ? "text-cyan-300 bg-white/10"
                          : "text-white/90 hover:text-cyan-300 hover:bg-white/10"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      {hoveredItem === index && (
                        <>
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl opacity-20 animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse"></div>
                        </>
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
                        "px-5 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group block",
                        isActive(item.href)
                          ? "text-cyan-300 bg-white/10"
                          : "text-white/90 hover:text-cyan-300 hover:bg-white/10"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      {hoveredItem === index && (
                        <>
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl opacity-20 animate-pulse"></div>
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse"></div>
                        </>
                      )}
                      {isActive(item.href) && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                      )}
                    </Link>
                  )}

                  {/* Submenu */}
                  {item.subItems && showSubmenu && hoveredItem === index && (
                    <div className="absolute top-full left-0 mt-3 w-60 bg-slate-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-600 h-0.5"></div>
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(subItem.href);
                          }}
                          className="block px-6 py-3 text-sm text-white/90 hover:text-cyan-300 hover:bg-white/5 transition-all duration-200 font-medium group relative"
                        >
                          <span className="relative z-10">{subItem.name}</span>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-cyan-400 to-purple-600 group-hover:h-6 transition-all duration-300 rounded-r"></div>
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Become Member</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              className="lg:hidden p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {menuState ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 lg:hidden transition-all duration-500",
            menuState ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-slate-900 h-full relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
              <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative flex flex-col h-full pt-24 px-6 pb-6">
              <div className="flex-1 space-y-3">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === index ? null : index)}
                          className="w-full flex items-center justify-between p-4 text-left font-bold text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-cyan-400/50 group"
                        >
                          <span className="group-hover:text-cyan-300 transition-colors duration-300">{item.name}</span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-all duration-300 group-hover:text-cyan-300",
                              mobileSubmenu === index && "rotate-180"
                            )}
                          />
                        </button>
                        {mobileSubmenu === index && (
                          <div className="mt-3 ml-4 space-y-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavigation(subItem.href);
                                }}
                                className="block p-3 text-white/80 hover:text-cyan-300 hover:bg-white/5 rounded-lg transition-all duration-300 font-medium group relative"
                              >
                                <span className="relative z-10">{subItem.name}</span>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-cyan-400 to-purple-600 group-hover:h-6 transition-all duration-300 rounded-r"></div>
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
                          "block p-4 font-bold rounded-xl transition-all duration-300 border border-white/10 group relative overflow-hidden",
                          isActive(item.href)
                            ? "text-cyan-300 bg-white/10 border-cyan-400/50 shadow-lg shadow-cyan-400/20"
                            : "text-white hover:text-cyan-300 hover:bg-white/5 hover:border-cyan-400/30"
                        )}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {isActive(item.href) && (
                          <div className="absolute right-2 top-1/2 -translate-y-1/2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                            <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full"></div>
                          </div>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <Button
                  onClick={() => handleNavigation("/become-member")}
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white py-4 rounded-xl font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Become Member
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar05;