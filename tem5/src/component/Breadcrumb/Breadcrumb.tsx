import React, { type FC } from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  links: { href: string; text: string }[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
  const lastIndex = links.length - 1;

  return (
    <nav className="flex items-center flex-wrap justify-center my-4">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {index !== lastIndex ? (
            <Link
              to={link.href}
              className="flex items-center text-blue-400 text-xl font-normal hover:underline relative after:ml-2.5 after:mr-3 after:inline-block after:w-2 after:h-2 after:border-r-2 after:border-b-2 after:border-white after:-rotate-45"
            >
              {link.text}
            </Link>
          ) : (
            <span className="text-white text-xl mx-2.5">{link.text}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
