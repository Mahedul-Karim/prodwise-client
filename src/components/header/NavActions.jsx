import React from "react";
import { Button } from "../ui/button";
import SheetCloseWrapper from "../common/SheetCloseWrapper";
import { useNavigate } from "react-router";
import { useProvider } from "@/store/Provider";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase.config";
import { toast } from "sonner";
import Profile from "../common/Profile";

const NavActions = ({ className = "", closeOnClick = false }) => {
  const navigate = useNavigate();

  const { user } = useProvider();

  return (
    <div className={className}>
      <SheetCloseWrapper closeOnClick={closeOnClick}>
        {!user ? (
          <Button
            variant="outline"
            className={
              "font-semibold border-primary text-primary hover:bg-primary hover:text-white px-6 h-8.5 w-full rounded-md lg:rounded-full"
            }
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
        ) : (
          <div className="flex items-center gap-2">
          <Profile />
            <Button
              variant="outline"
              className={
                "font-semibold border-primary text-primary hover:bg-primary hover:text-white px-6 h-8.5 grow w-auto rounded-md lg:rounded-full"
              }
              onClick={() => {
                signOut(auth)
                  .then(() => toast.success("Logged out succesfully!"))
                  .catch((err) => toast.error(err.message));
              }}
            >
              Logout
            </Button>
          </div>
        )}
      </SheetCloseWrapper>
    </div>
  );
};

export default NavActions;
