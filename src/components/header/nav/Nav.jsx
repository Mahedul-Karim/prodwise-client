import { NAV_LINKS } from "@/lib/data";
import React from "react";
import { Link, useLocation } from "react-router";

const Nav = ({className=""}) => {
  const location = useLocation();

  const pathname = location?.pathname;

  return (
    <nav className={className}>
      <ul className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
        {NAV_LINKS.map((nav) => (
          <li key={nav.to} className="w-full lg:w-auto">
            <Link
              to={nav.to}
              className={`text-dark rounded-md w-full flex lg:inline-block items-center justify-center font-medium px-3 py-2 transition-colors duration-300 hover:bg-primary lg:hover:bg-transparent hover:text-white lg:hover:text-primary relative lg:before:h-[2px] lg:hover:before:w-[25px] lg:before:transtion-[width] lg:before:duration-300  lg:before:w-[0px] lg:before:bg-primary lg:before:absolute lg:before:bottom-0 ${
                pathname === nav.to
                  ? "bg-primary lg:bg-transparent text-white lg:text-primary lg:before:w-[25px]"
                  : "text-dark lg:before:w-[0px]"
              }`}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
