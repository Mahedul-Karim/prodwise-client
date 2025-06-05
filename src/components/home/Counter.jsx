import React from "react";
import Container from "../common/Container";
import { counterDate } from "@/lib/data";
import CounterCard from "./CounterCard";

const Counter = () => {
  return (
    <section className="py-8 md:py-16 bg-background">
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-4">
        {counterDate?.map((count, i) => (
          <CounterCard
            key={i}
            icon={count.icon}
            title={count.title}
            suffix={count.suffix}
            subtitle={count.subtitle}
          />
        ))}
      </Container>
    </section>
  );
};

export default Counter;
