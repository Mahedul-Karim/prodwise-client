import React from "react";
import { Link } from "react-router";
import SheetCloseWrapper from "./SheetCloseWrapper";

const Logo = ({ closeOnClick = false, isInFooter = false }) => {
  return (
    <SheetCloseWrapper closeOnClick={closeOnClick}>
      <Link to={"/"} className="flex items-center gap-2">
        <img
          src={isInFooter ? "/icon-footer.png" : "/icon.png"}
          alt=""
          className="size-8 xs:size-10 object-cover"
        />
        <p
          className={`xs:text-xl font-bold ${
            isInFooter ? "text-white" : "text-primary"
          }`}
        >
          prodwise
        </p>
      </Link>
    </SheetCloseWrapper>
  );
};

export default Logo;
