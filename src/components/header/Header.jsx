import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Nav from "./nav/Nav";
import NavActions from "./NavActions";
import MobileNav from "./nav/MobileNav";

const Header = () => {
  return (
    <header>
      <Container className="flex items-center justify-between py-4">
        <Logo />
        <Nav className="hidden lg:block" />
        <NavActions className="hidden lg:block" />
        <MobileNav />
      </Container>
    </header>
  );
};

export default Header;
