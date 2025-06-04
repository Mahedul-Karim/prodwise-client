import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <img src="/icon.png" alt="" className="size-8 xs:size-10 object-cover" />
      <p className="xs:text-xl font-bold text-primary">prodwise</p>
    </Link>
  );
};

export default Logo;
