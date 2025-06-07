import React from "react";
import GridCard from "../GridCard";

const GridQueries = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-4 gap-2">
      {data?.map((query) => (
        <GridCard
          key={query._id}
          id={query._id}
          productName={query.productName}
          productBrand={query.productBrand}
          productImageURL={query.productImage}
          queryTitle={query.queryTitle}
          boycottingReason={query.boycottingReason}
          recommendationCount={query.recommendationCount}
        />
      ))}
    </div>
  );
};

export default GridQueries;
