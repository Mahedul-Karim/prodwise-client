import { Heart } from "lucide-react";
import React from "react";
import RecommendationCard from "./RecommendationCard";
import Empty from "@/components/error/Empty";

const QueryRecommendations = ({ recommendations = [] }) => {
  return (
    <section className="p-6 bg-white dark:bg-border/10 rounded-md mt-10">
      <h3 className="flex items-center gap-2 text-lg sm:text-xl text-dark font-bold justify-center">
        <Heart className="text-primary shrink-0" /> Community Recommendations
      </h3>
      <div className="mt-6 flex flex-col gap-4">
        {recommendations?.length === 0 ? (
          <Empty title={"No recommendations have been made yet"} />
        ) : (
          recommendations?.map((res) => (
            <RecommendationCard
              key={res._id}
              recommendationTitle={res.recommendationTitle}
              recommendedProductName={res.recommendedProductName}
              recommendedProductImage={res.recommendedProductImage}
              recommendationReason={res.recommendationReason}
              recommenderEmail={res.recommenderEmail}
              recommenderName={res.recommenderName}
              recommenderImage={res.recommenderImage}
              currentTime={res.currentTime}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default QueryRecommendations;
