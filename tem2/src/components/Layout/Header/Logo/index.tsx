import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <img
        src="/images/logo/logo.svg"
        alt="logo"
        width={160}
        height={50}
        className="dark:hidden"
      />

      <img
        src="/images/logo/logo1.svg"
        alt="logo"
        width={140}
        height={30}
        className="hidden dark:block"
      />
    </Link>
  );
};

export default Logo;