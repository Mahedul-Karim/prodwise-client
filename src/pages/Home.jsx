import Banner from "@/components/home/Banner";
import Counter from "@/components/home/Counter";
import Discussion from "@/components/home/Discussion";
import RecentQueries from "@/components/home/RecentQueries";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <RecentQueries />
      <Discussion />
      <Counter />
    </>
  );
};

export default Home;
