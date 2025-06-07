import Container from "@/components/common/Container";
import Title from "@/components/home/sections/Title";
import GridCard from "@/components/queries/GridCard";
import Banner from "@/components/queries/my-queries/Banner";
import EmptyQuery from "@/components/queries/my-queries/EmptyQuery";
import { useApi } from "@/hooks/useApi";
import { dummyQueries } from "@/lib/data";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

const MyQueries = () => {
  const [data, setData] = useState([]);

  const { isLoading, getQuery } = useApi();

  useEffect(() => {
    getQuery({
      url: "query/my-query",
    }).then((res) => setData(res.queries));
  }, []);

  return (
    <main className="border-t border-border">
      <Container className="py-8 md:py-16">
        <Banner />
        <div className="mt-8">
          <Title>My Queries</Title>
          {isLoading && (
            <div className="h-50 grid place-items-center">
              <Loader className="text-primary size-12 animate-spin" />
            </div>
          )}
          {!isLoading && data?.length === 0 && <EmptyQuery />}

          {!isLoading && data?.length > 0 && (
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
