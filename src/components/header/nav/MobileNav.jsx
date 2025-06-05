import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavActions from "../NavActions";
import { Button } from "@/components/ui/button";
import Logo from "@/components/common/Logo";
import Nav from "./Nav";

const MobileNav = () => {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <span className="w-8 bg-primary h-[1.5px] cursor-pointer  relative before:absolute before:bg-primary before:w-[20px] xs:before:-top-[10px] before:-top-2 before:left-0 before:h-[1.5px] after:absolute after:bg-primary after:w-[20px] after:h-[1.5px] after:top-2 xs:after:top-[10px] after:right-0 before:transition-all before:duration-300 after:transition-all after:duration-300 block"></span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="border-none overflow-auto px-4">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center">
              <Logo closeOnClick />
            </SheetTitle>
            <SheetDescription className="sr-only">
              This is a mobile navigation.
            </SheetDescription>
          </SheetHeader>
          <Nav closeOnClick />
          <SheetFooter>
            <NavActions closeOnClick />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
