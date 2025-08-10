import Container from "@/components/common/Container";
import Empty from "@/components/error/Empty";
import Title from "@/components/home/sections/Title";
import RecommendationTable from "@/components/recommendations/RecommendationTable";
import { useApi } from "@/hooks/useApi";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

const RecommendationsForMe = () => {
  const [data, setData] = useState([]);

  const { isLoading, getQuery } = useApi();

  useEffect(() => {
    getQuery({
      url: "recommendation",
    }).then((res) => setData(res?.recommendations));
  }, []);

  return (
    <main className="border-t border-border dark:border-border/20 bg-background py-8 md:py-16">
      <Container className="bg-white dark:bg-border/10 p-6 rounded-md">
        <Title className="!my-0">Recommendations for me</Title>
        {isLoading && (
          <div className="h-60 grid place-items-center">
            <Loader className="size-12 animate-spin text-primary" />
          </div>
        )}
        {!isLoading && data?.length === 0 && (
          <Empty title={"No recommendations found"} />
        )}
        {!isLoading && data?.length > 0 && (
          <RecommendationTable data={data} setData={setData} />
        )}
      </Container>
    </main>
  );
};

export default RecommendationsForMe;
