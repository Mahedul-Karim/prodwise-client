import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
