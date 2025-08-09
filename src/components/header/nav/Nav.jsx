import SheetCloseWrapper from "@/components/common/SheetCloseWrapper";
import { NAV_LINKS } from "@/lib/data";
import { useProvider } from "@/store/Provider";
import React from "react";
import { Link, useLocation } from "react-router";

const Nav = ({ className = "", closeOnClick = false }) => {
  const { user } = useProvider();

  const filteredLinks = NAV_LINKS?.filter((link) => !link.isPrivate || !!user);

  const location = useLocation();

  const pathname = location?.pathname;

  return (
    <nav className={className}>
      <ul className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
        {filteredLinks.map((nav) => (
          <li key={nav.to} className="w-full lg:w-auto">
            <SheetCloseWrapper closeOnClick={closeOnClick}>
              <Link
                to={nav.to}
                className={`font-semibold text-dark rounded-md w-full flex lg:inline-block items-center justify-center text-sm px-3 py-2 transition-colors duration-300 hover:bg-primary lg:hover:bg-transparent hover:text-white lg:hover:text-primary relative lg:before:h-[2px] lg:hover:before:w-[25px] lg:before:transtion-[width] lg:before:duration-300  lg:before:w-[0px] lg:before:bg-primary lg:before:absolute lg:before:bottom-0 ${
                  pathname === nav.to
                    ? "bg-primary lg:bg-transparent text-white lg:text-primary lg:before:w-[25px]"
                    : "text-dark lg:before:w-[0px]"
                }`}
              >
                {nav.label}
              </Link>
            </SheetCloseWrapper>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
