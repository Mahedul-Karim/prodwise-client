import React from "react";
import Container from "../common/Container";
import Title from "./sections/Title";
import { dummyQueries } from "@/lib/data";
import GridCard from "../queries/GridCard";

const RecentQueries = () => {
  return (
    <Container className="py-8 md:py-16">
      <Title>Recent Queries</Title>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-4 gap-2">
        {dummyQueries.map((data, i) => (
          <GridCard
            key={i}
            id={i}
            productName={data.productName}
            productBrand={data.productBrand}
            productImageURL={data.productImageURL}
            queryTitle={data.queryTitle}
            boycottingReason={data.boycottingReason}
            recommendationCount={data.recommendationCount}
          />
        ))}
      </div>
    </Container>
  );
};

export default RecentQueries;
