import React from "react";

import { dummyQueries } from "@/lib/data";
import ListCard from "../ListCard";

const ListQueries = () => {
  return (
    <div className="flex flex-col gap-4">
      {dummyQueries.map((data, i) => (
        <ListCard
          key={i}
          id={i}
          productName={data.productName}
          productBrand={data.productBrand}
          productImageURL={data.productImageURL}
          queryTitle={data.queryTitle}
          boycottingReason={data.boycottingReason}
          recommendationCount={data.recommendationCount}
          currentDate={data.currentDate}
        />
      ))}
    </div>
  );
};

export default ListQueries;
