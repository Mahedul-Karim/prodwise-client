import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "./nav/Nav";
import NavActions from "./NavActions";
import MobileNav from "./nav/MobileNav";
import Toggle from "../common/toggle/Toggle";

const Header = () => {
  return (
    <header className="bg-white dark:bg-background sticky top-0 w-full z-[2]">
      <Container className="flex items-center justify-between py-4">
        <Logo />
        <Nav className="hidden lg:block" />
        <div className="hidden lg:flex items-center gap-2">
          <Toggle />
          <NavActions />
        </div>
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
