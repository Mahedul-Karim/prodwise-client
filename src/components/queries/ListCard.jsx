import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircle, MessageCircleWarning } from "lucide-react";
import { formateDate } from "@/lib/utils";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";

const ListCard = ({
  id,
  productName,
  productBrand,
  productImageURL,
  queryTitle,
  boycottingReason,
  recommendationCount,
  currentDate,
}) => {
  return (
    <Card className="border-none shadow-none bg-background py-4">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col xs:flex-row xs:items-center gap-4">
          <div className="relative">
            <img
              src={productImageURL}
              alt=""
              className="xs:w-[200px] aspect-[16/12] rounded-md object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-accent rounded-full font-semibold xs:text-sm text-dark dark:text-black">
                <MessageCircle />
                {recommendationCount}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col gap-2 grow max-w-[300px]">
            <h2 className="text-lg sm:text-xl font-semibold text-dark">{productName}</h2>
            <p className="text-sm text-muted font-medium flex items-center gap-2 flex-wrap">
              by{" "}
              <Badge
                className={
                  "rounded-full bg-blue-200 text-blue-800 font-semibold"
                }
              >
                {productBrand}
              </Badge>{" "}
            </p>
            <p className="text-sm text-muted font-medium">
              {formateDate(currentDate)}
            </p>
            <Link
              to={`/query/${id}`}
              className={buttonVariants({
                variant: "default",
                className:
                  "w-full font-semibold !text-dark dark:!text-black !bg-yellow-300 xs:text-sm text-xs !h-8 xs:!h-9",
              })}
            >
              Recommend
            </Link>
          </div>
        </div>

        <div className="grow flex flex-col gap-1">
          <Alert className="border-none bg-white dark:bg-zinc-700 my-2 grid">
            <MessageCircleWarning />
            <AlertTitle className="text-dark font-semibold">
              Question!
            </AlertTitle>
            <AlertDescription className="text-muted dark:text-dark/80">
              {queryTitle}
            </AlertDescription>
          </Alert>
          <Alert className="bg-red-50 border-red-300 grid">
            <AlertTitle className="text-red-800 font-semibold uppercase">
              Reported Issue!
            </AlertTitle>
            <AlertDescription className="text-red-500">
              {boycottingReason}
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
    </Card>
  );
};

export default ListCard;
