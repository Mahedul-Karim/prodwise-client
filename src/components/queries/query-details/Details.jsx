import { Badge } from "@/components/ui/badge";
import { formateDate } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircle, PackageSearch, User } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Details = ({ data }) => {
  return (
    <section className="p-4 bg-white dark:bg-border/10 rounded-md grid md:grid-cols-2 gap-4">
      <div className="relative">
        <img
          src={data?.productImage}
          alt=""
          className="aspect-[16/10] md:aspect-auto h-full object-cover w-full rounded-md max-h-[450px]"
        />
        <div className="absolute top-2 xs:top-4 right-2 xs:right-4">
          <Badge className="bg-accent text-dark rounded-full font-semibold xs:text-sm dark:text-white">
            <MessageCircle />
            {data?.recommendationCount}
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="text-xl xs:text-2xl font-bold text-dark">
          {data?.queryTitle}
        </h1>
        <p className="text-muted text-sm xs:text-base font-medium flex items-center gap-2 flex-wrap">
          brand:
          <Badge
            className={"rounded-full bg-blue-200 text-blue-800 font-semibold"}
          >
            {data?.productBrand}
          </Badge>{" "}
        </p>

        <p className="text-muted text-sm flex items-center gap-2 flex-wrap">
          posted on: {formateDate(new Date(data?.currentDate))}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-muted text-sm">posted by:</p>
          <div className="flex items-center gap-2">
            <Avatar className="size-8 xs:size-10">
              <AvatarImage src={data?.creatorImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-dark font-bold text-sm xs:text-base">
                {data?.creatorName}
              </h2>
              <p className="text-muted text-xs xs:text-sm">
                {data?.creatorEmail}
              </p>
            </div>
          </div>
        </div>
        <Alert className="border-border dark:border-border/20 my-2 bg-white dark:bg-zinc-600">
          <PackageSearch className="!text-dark" />
          <AlertTitle className="text-dark font-semibold">Product</AlertTitle>
          <AlertDescription className="text-muted dark:text-white/80">
            {data?.productName}
          </AlertDescription>
        </Alert>
        <Alert className="bg-red-50 border-red-300">
          <AlertTitle className="text-red-800 font-semibold uppercase">
            Reported Issue!
          </AlertTitle>
          <AlertDescription className="text-red-500">
            {data?.boycottingReason}
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default Details;
