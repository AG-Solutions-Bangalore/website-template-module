import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { headerData } from "../Header/Navigation/menuData";
// import HeaderLink from "../Header/Navigation/HeaderLink";
// import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
// import Signin from "@/components/Auth/SignIn";
// import SignUp from "@/components/Auth/SignUp";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "../../Theme/ThemeProvider";
import { headerData } from "./headerData";
import HeaderLink from "./HeaderLink";
import MobileHeaderLink from "./MobileHeaderLink";
// import { SuccessfullLogin } from "@/components/Auth/AuthDialog/SuccessfulLogin";
// import { FailedLogin } from "@/components/Auth/AuthDialog/FailedLogin";
// import { UserRegistered } from "@/components/Auth/AuthDialog/UserRegistered";
// import AuthDialogContext from "@/app/context/AuthDialogContext";

const Header: React.FC = () => {
  const { toggleTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);


  return (
    <>
      <header
        className={`sticky h-24 top-0 py-1 z-50 w-full bg-primary transition-all ${
          sticky
            ? "shadow-lg dark:shadow-darkmd bg-primary dark:bg-primary"
            : "shadow-none"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-6">
          <Link to="/">
            <img
              src="/images/logo/logo.svg"
              alt="logo"
              width={160}
              height={50}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <ul className="hidden lg:flex grow items-center justify-center gap-6">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </ul>
          <div className="flex items-center xl:gap-4 lg:gap-2 gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="flex items-center justify-center text-body-color duration-300 hover:cursor-pointer  dark:text-white   p-2 outline-none"
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

            {/* Sign In */}
            <button
              className="hidden lg:block bg-white border border-primary text-primary px-4 py-2 rounded-lg hover:bg-black hover:text-white"
              onClick={() => {
                setIsSignInOpen(true);
              }}
            >
              Sign In
            </button>
            {isSignInOpen && (
              <div
                ref={signInRef}
                className="fixed ml-0! top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
              >
                <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-secondary">
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className="hover:bg-BorderLine dark:hover:bg-border p-1 rounded-full absolute -top-5 -right-3 mr-8 mt-8"
                    aria-label="Close Sign In Modal"
                  >
                    <Icon
                      icon="ic:round-close"
                      className="text-2xl dark:text-white"
                    />
                  </button>
                  {/* <Signin
                    signInOpen={(value: boolean) => setIsSignInOpen(value)}
                  /> */}
                </div>
              </div>
            )}

            {/* Sign Up */}
            <button
              className="hidden lg:block bg-LightApricot text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white"
              onClick={() => {
                setIsSignUpOpen(true);
              }}
            >
              Sign Up
            </button>
            {isSignUpOpen && (
              <div
                ref={signUpRef}
                className="fixed top-0 ml-0! left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
              >
                <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-darklight">
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className="hover:bg-BorderLine dark:hover:bg-border p-1 rounded-full absolute -top-5 -right-3 mr-8 mt-8"
                    aria-label="Close Sign In Modal"
                  >
                    <Icon
                      icon="ic:round-close"
                      className="text-2xl dark:text-white"
                    />
                  </button>
                  {/* <SignUp
                    signUpOpen={(value: boolean) => setIsSignUpOpen(value)}
                  /> */}
                </div>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white dark:bg-white"></span>
              <span className="block w-6 h-0.5 bg-white dark:bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-white dark:bg-white mt-1.5"></span>
            </button>
          </div>
        </div>

        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}

        {/* Mobile Nav */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-64 ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-black dark:text-white">
              Menu
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="dark:text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink
                key={index}
                item={item}
                setNavbarOpen={setNavbarOpen}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            ))}
            <div className="mt-4 flex flex-col gap-4 w-full">
              <button
                className="bg-white border border-primary text-primary px-4 py-2 rounded-lg hover:bg-black hover:text-white"
                onClick={() => {
                  setIsSignInOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign In
              </button>
              <button
                className="bg-LightApricot text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white"
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>

        {/* Alerts */}
        {/* <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isSuccessDialogOpen ? "block" : "hidden"
          }`}
        >
          <SuccessfullLogin />
        </div>
        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isFailedDialogOpen ? "block" : "hidden"
          }`}
        >
          <FailedLogin />
        </div>
        <div
          className={`fixed top-6 end-1/2 translate-x-1/2 z-50 ${
            authDialog?.isUserRegistered ? "block" : "hidden"
          }`}
        >
          <UserRegistered />
        </div> */}
      </header>
    </>
  );
};

export default Header;
