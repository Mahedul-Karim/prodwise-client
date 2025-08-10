import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formateDate } from "@/lib/utils";
import { Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecommendationCard = ({
  recommendationTitle,
  recommendedProductName,
  recommendedProductImage,
  recommendationReason,
  recommenderEmail,
  recommenderName,
  recommenderImage,
  currentTime,
}) => {
  return (
    <Card className="border-border/50 dark:border-border/20 shadow-none bg-background gap-4 py-4">
      <CardHeader className="px-2 xs:px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div>
            <img
              src={recommendedProductImage}
              alt=""
              className="md:w-[200px] aspect-[16/12] rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 grow">
            <h2 className="text-lg xs:text-xl font-bold text-dark">
              {recommendationTitle}
            </h2>
            <p className="font-semibold text-primary text-sm xs:text-base">
              {recommendedProductName}
            </p>
            <p className="text-muted text-sm flex items-center gap-2 flex-wrap">
              <Clock className="size-4" />
              {formateDate(new Date(currentTime))}
            </p>
            <div className="flex items-center gap-2">
              <Avatar className={"size-8 xs:size-9"}>
                <AvatarImage src={recommenderImage} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-muted font-medium text-sm xs:text-base">
                {recommenderName}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 xs:px-4">
        <p className="text-muted">{recommendationReason}</p>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
