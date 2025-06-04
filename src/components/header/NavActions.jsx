import React from "react";
import { Button } from "../ui/button";

const NavActions = ({className=""}) => {
  return (
    <div className={className}>
      <Button
        variant="outline"
        className={
          "font-semibold border-primary text-primary hover:bg-primary hover:text-white px-6 h-8.5 w-full rounded-md lg:rounded-full"
        }
      >
        Log In
      </Button>
    </div>
  );
};

export default NavActions;
