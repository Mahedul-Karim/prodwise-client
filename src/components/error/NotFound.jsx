import React from "react";
import Header from "../header/Header";
import Container from "../common/Container";
import { Link, useRouteError } from "react-router";
import { buttonVariants } from "../ui/button";
import Footer from "../footer/Footer";

const NotFound = ({
  message = "Oops! The page you're looking for seems to have taken a different path.\n It might be under construction or doesn't exist.",
}) => {
  const error = useRouteError();

  return (
    <>
      <Header />
      <Container className="py-10">
        <div className="flex items-center justify-center">
          <img src="/not-found.png" alt="" className="max-h-[350px]" />
        </div>
        <p className="my-4 text-center text-muted font-medium whitespace-pre-wrap text-sm sm:text-base">
          {error?.message || message}
        </p>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className={`${buttonVariants({
              variant: "default",
              className: "!rounded-full font-semibold text-white",
            })}`}
          >
            Back to Home
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
