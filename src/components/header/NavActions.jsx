import React from "react";
import { Button } from "../ui/button";
import SheetCloseWrapper from "../common/SheetCloseWrapper";
import { useNavigate } from "react-router";

const NavActions = ({ className = "", closeOnClick = false }) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <SheetCloseWrapper closeOnClick={closeOnClick}>
        <Button
          variant="outline"
          className={
            "font-semibold border-primary text-primary hover:bg-primary hover:text-white px-6 h-8.5 w-full rounded-md lg:rounded-full"
          }
          onClick={() => navigate("/login")}
        >
          Log In
        </Button>
      </SheetCloseWrapper>
    </div>
  );
};

export default NavActions;
