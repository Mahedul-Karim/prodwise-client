import React from "react";

import ListCard from "../ListCard";

const ListQueries = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data?.map((query) => (
        <ListCard
          key={query._id}
          id={query._id}
          productName={query.productName}
          productBrand={query.productBrand}
          productImageURL={query.productImage}
          queryTitle={query.queryTitle}
          boycottingReason={query.boycottingReason}
          recommendationCount={query.recommendationCount}
          currentDate={query.currentDate}
        />
      ))}
    </div>
  );
};

export default ListQueries;
