import React, { useRef } from "react";
import Container from "../common/Container";
import Title from "./sections/Title";
import { dummyQueries } from "@/lib/data";
import GridCard from "../queries/GridCard";
import { useInView, motion } from "framer-motion";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const RecentQueries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container className="py-8 md:py-16">
      <Title>Recent Queries</Title>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-4 gap-2"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        ref={ref}
      >
        {dummyQueries.map((data, i) => (
          <motion.div key={i} variants={cardVariant}>
            <GridCard
              id={i}
              productName={data.productName}
              productBrand={data.productBrand}
              productImageURL={data.productImageURL}
              queryTitle={data.queryTitle}
              boycottingReason={data.boycottingReason}
              recommendationCount={data.recommendationCount}
            />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default RecentQueries;
