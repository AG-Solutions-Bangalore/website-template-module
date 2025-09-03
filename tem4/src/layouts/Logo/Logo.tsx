import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Logo: React.FC<HeaderProps> = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial check
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <Link to="/">
      {!isDark ? (
        <img
          src="/images/logo/logo.svg"
          alt="logo"
          width={160}
          height={50}
          style={{ width: "auto", height: "auto" }}
        />
      ) : (
        <img
          src="/images/logo/logo-white.svg"
          alt="logo"
          width={160}
          height={50}
          style={{ width: "auto", height: "auto" }}
        />
      )}
    </Link>
  );
};

export default Logo;
