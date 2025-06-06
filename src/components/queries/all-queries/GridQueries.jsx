import { dummyQueries } from "@/lib/data";
import React from "react";
import GridCard from "../GridCard";

const GridQueries = () => {
  return (
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
  );
};

export default GridQueries;
