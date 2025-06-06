import Container from "@/components/common/Container";
import Title from "@/components/home/sections/Title";
import GridCard from "@/components/queries/GridCard";
import Banner from "@/components/queries/my-queries/Banner";
import EmptyQuery from "@/components/queries/my-queries/EmptyQuery";
import { dummyQueries } from "@/lib/data";
import React from "react";

const MyQueries = () => {
  return (
    <main className="border-t border-border">
      <Container className="py-8 md:py-16">
        <Banner />
        <div className="mt-8">
          <Title>My Queries</Title>
          {dummyQueries?.length === 0 ? (
            <EmptyQuery />
          ) : (
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
                  isUserQuery
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};

export default MyQueries;
