import Container from "@/components/common/Container";
import Empty from "@/components/error/Empty";
import Details from "@/components/queries/query-details/Details";
import QueryRecommendations from "@/components/queries/query-details/QueryRecommendations";
import RecommendationForm from "@/components/queries/query-details/RecommendationForm";
import { useApi } from "@/hooks/useApi";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const QueryDetails = () => {
  const { queryId } = useParams();

  const [data, setData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const { isLoading, getQuery } = useApi();


  useEffect(() => {
    getQuery({
      url: `query/${queryId}`,
    }).then((res) => {
      setData(res.query);
      setRecommendations(res.recommendations);
    });
  }, []);

  return (
    <main className="border-t border-border py-8 md:py-16 bg-background">
      <Container>
        {isLoading && (
          <div className="h-screen grid place-items-center">
            <Loader className="size-12 text-primary animate-spin" />
          </div>
        )}
        {!isLoading && !data && (
          <div>
            <Empty title={"No query has been found!"} />
          </div>
        )}
        {!isLoading && data && (
          <>
            <Details data={data} />
            <QueryRecommendations recommendations={recommendations} />
            <RecommendationForm
              data={data}
              setData={setData}
              setRecommendations={setRecommendations}
            />
          </>
        )}
      </Container>
    </main>
  );
};

export default QueryDetails;
