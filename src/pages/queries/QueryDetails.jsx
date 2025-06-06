import Container from "@/components/common/Container";
import Details from "@/components/queries/query-details/Details";
import QueryRecommendations from "@/components/queries/query-details/QueryRecommendations";
import RecommendationForm from "@/components/queries/query-details/RecommendationForm";
import React from "react";
import { useParams } from "react-router";

const QueryDetails = () => {
  const { queryId } = useParams();

  console.log(queryId);

  return (
    <main className="border-t border-border py-8 md:py-16 bg-background">
      <Container>
        <Details />
        <QueryRecommendations />
        <RecommendationForm />
      </Container>
    </main>
  );
};

export default QueryDetails;
