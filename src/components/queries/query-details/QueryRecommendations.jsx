import { Heart } from "lucide-react";
import React from "react";
import RecommendationCard from "./RecommendationCard";

const QueryRecommendations = () => {
  return (
    <section className="p-6 bg-white rounded-md mt-10">
      <h3 className="flex items-center gap-2 text-lg sm:text-xl text-dark font-bold justify-center">
        <Heart className="text-primary shrink-0" /> Community Recommendations
      </h3>
      <div className="mt-6 flex flex-col gap-4">
        <RecommendationCard />
      </div>
    </section>
  );
};

export default QueryRecommendations;
