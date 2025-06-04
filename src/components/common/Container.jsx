import React from "react";

const Container = ({ className="", children }) => {
  return (
    <div className={`max-w-7xl w-11/12 mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
