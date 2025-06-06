import React from "react";

const Title = ({ children,className="" }) => {
  return <h2 className={`text-xl my-8 sm:text-2xl font-bold text-dark text-center ${className}`}>{children}</h2>;
};

export default Title;
