import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "../Logo/Logo";
import { headerData } from "./headerData";
import HeaderLink from "./HeaderLink";
import MobileHeaderLink from "./MobileHeaderLink";
import { useTheme } from "../../Theme/ThemeProvider";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle sticky header
  const handleScroll = () => setSticky(window.scrollY >= 80);

  // Handle click outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [location.pathname, navbarOpen, isSignInOpen, isSignUpOpen]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  // Sign out
  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };
  console.log(theme, "theme");
  return (
    <header
      className={`fixed top-0 py-1 z-50 w-full bg-transparent transition-all ${
        sticky ? "shadow-lg bg-white dark:bg-darklight" : "shadow-none"
      }`}
    >
      <div
        className={`container mx-auto lg:max-w-xl md:max-w-screen-md flex items-center justify-between  xl:gap-15 gap-10 duration-300 px-4 ${
          sticky ? "py-3" : "py-6"
        }`}
      >
        <Logo />
        <ul className="hidden xl:flex flex-grow items-center justify-start gap-10">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex items-center justify-center text-body-color duration-300 hover:cursor-pointer hover:text-primary dark:text-white bg-white rounded-full dark:bg-darklight p-2 outline-none"
          >
            <Icon
              icon="solar:sun-2-bold"
              width="24"
              height="24"
              className="hidden dark:block"
            />
            <Icon
              icon="solar:moon-bold"
              width="24"
              height="24"
              className="dark:hidden block"
            />
          </button>

          {user ? (
            <>
              <div className="relative group flex items-center justify-center">
                <img
                  src="/images/profile.png"
                  alt="Profile"
                  width={35}
                  height={35}
                  className="rounded-full cursor-pointer"
                />
                <p className="absolute w-fit text-sm font-medium text-center z-10 invisible group-hover:visible transition-opacity duration-200 bg-primary text-white py-1 px-3 min-w-28 rounded-md shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3">
                  {user?.name}
                </p>
              </div>
              <button
                onClick={handleSignOut}
                className="hidden lg:block bg-primary text-sm hover:bg-orange-600 text-white px-4 py-3.5 border border-primary duration-500 leading-none rounded-lg font-medium text-nowrap cursor-pointer"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="hidden xl:block bg-transparent border border-primary text-primary px-4 py-2 rounded-lg outline-none hover:bg-primary hover:text-white duration-500 text-base font-semibold"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="hidden xl:block bg-primary text-white px-4 py-2 rounded-lg outline-none hover:bg-orange-600 border border-primary duration-500 text-base font-semibold"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block xl:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-primary mt-1.5"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
      )}
      <div
        ref={mobileMenuRef}
        className={`xl:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darklight shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <Icon icon="ph:x-circle" width="24" height="24" />
          </button>
        </div>
        <nav className="flex flex-col items-start p-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className="mt-4 flex gap-4 w-full">
            <Link
              to="/signin"
              className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white"
              onClick={() => setNavbarOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              onClick={() => setNavbarOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
