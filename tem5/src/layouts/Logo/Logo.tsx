import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="sm:max-w-56 max-w-44">
      <img
        src="/images/logo/logo-dark.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        className="dark:hidden"
      />
      <img
        src="/images/logo/logo.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        className="dark:block hidden"
      />
    </Link>
  );
};

export default Logo;
