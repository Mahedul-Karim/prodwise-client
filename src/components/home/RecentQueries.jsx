import React, { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import Title from "./sections/Title";
import GridCard from "../queries/GridCard";
import { Loader } from "lucide-react";
import Empty from "../error/Empty";
import { useApi } from "@/hooks/useApi";

const RecentQueries = () => {
  const { isLoading, getQuery } = useApi();

  const [data, setData] = useState([]);

  useEffect(() => {
    getQuery({
      url: "query/recent",
    }).then((data) => setData(data?.queries));
  }, []);

  return (
    <Container className="py-8 md:py-16">
      <Title>Recent Queries</Title>
      {isLoading && (
        <div className="h-[250px] grid place-items-center">
          <Loader className="text-primary animate-spin size-12" />
        </div>
      )}
      {!isLoading && data?.length === 0 && (
        <div>
          <Empty title={"No queries found!"} />
        </div>
      )}
      {!isLoading && data?.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-4 gap-2">
          {data?.map((query, i) => (
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
      )}
    </Container>
  );
};

export default RecentQueries;
