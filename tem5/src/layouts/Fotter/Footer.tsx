import { FC } from "react";
import { sections } from "../../data/data";
import { Link, useLocation } from "react-router-dom";

const footerTitles = {
  features: "Features",
  resources: "Resources",
  platform: "Platform",
};

const Footer: FC = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <footer
      className={`relative dark:bg-darkmode bg-[url('/images/footer/ftr-bg.png')] bg-cover bg-no-repeat w-full h-full ${
        pathname == "/" ? "pt-72 z-3" : "pt-32"
      }`}
    >
      <div className="bg-secondary md:pb-20 pb-8">
        <div className="container">
          <div className="flex items-center justify-between pb-16 border-b border-dark_border border-solid">
            <Link to="/">
              <img
                src="/images/footer/ftr-logo.svg"
                alt="Company logo"
                width={160}
                height={50}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <div>
              <ul className="flex items-center gap-5">
                <li>
                  <Link to="/" aria-label="Facebook">
                    <svg
                      width="26"
                      height="27"
                      fill="white"
                      viewBox="0 0 26 27"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Twitter">
                    <svg
                      width="26"
                      height="27"
                      viewBox="0 0 26 27"
                      fill="#fff"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="LinkedIn">
                    <svg
                      width="26"
                      height="28"
                      viewBox="0 0 26 28"
                      fill="#fff"
                      className="group-hover:fill-LightApricot"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Path */}
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 pt-10 gap-6 md:gap-0">
            {Object.entries(sections).map(([sectionKey, items]) => {
              let colSpan = "col-span-3 md:col-span-3";

              return (
                <div key={sectionKey} className={`${colSpan}`}>
                  <p className="text-lg font-medium text-white pb-4">
                    {footerTitles[sectionKey as keyof typeof footerTitles]}
                  </p>
                  <ul>
                    {items.map((item) => (
                      <li
                        key={item.name}
                        className="text-base font-normal text-SlateBlue leading-8 hover:text-white"
                      >
                        <Link to={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            <div className="md:col-span-3">
              <p className="text-lg font-medium text-white pb-4">
                Sign up for updates
              </p>
              <div className="relative flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  className="bg-transparent border border-dark_border border-solid py-3 pl-6 pr-14 rounded-lg focus:outline-0 text-SlateBlue w-full focus:border-primary"
                  aria-label="Email address"
                />
                <button
                  className="absolute bg-transparent right-0 p-4"
                  aria-label="Submit"
                >
                  <i className="bg-[url('/images/footer/msg-enter.svg')] bg-contain w-5 h-5 inline-block"></i>
                </button>
              </div>
              <p className="text-base font-normal text-SlateBlue max-w-310 pt-3">
                © Copyright 2025. All rights reserved by{" "}
                <Link to="/" className="hover:text-primary">
                  This Template
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
