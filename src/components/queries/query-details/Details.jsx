import { Badge } from "@/components/ui/badge";
import { formateDate } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircle, PackageSearch, User } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Details = () => {
  return (
    <section className="p-4 bg-white rounded-md grid md:grid-cols-2 gap-4">
      <div className="relative">
        <img
          src={"https://i.ibb.co/rR2qSMbL/query-12.jpg"}
          alt=""
          className="aspect-[16/10] md:aspect-auto h-full object-cover w-full rounded-md"
        />
        <div className="absolute top-2 xs:top-4 right-2 xs:right-4">
          <Badge className="bg-accent text-dark rounded-full font-semibold xs:text-sm">
            <MessageCircle />
            24
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="text-xl xs:text-2xl font-bold text-dark">
          Looking for quiet hair dryers with similar speed?
        </h1>
        <p className="text-muted text-sm xs:text-base font-medium flex items-center gap-2 flex-wrap">
          brand:
          <Badge
            className={"rounded-full bg-blue-200 text-blue-800 font-semibold"}
          >
            StylePro
          </Badge>{" "}
        </p>

        <p className="text-muted text-sm flex items-center gap-2 flex-wrap">
          posted on: {formateDate(new Date("2025-05-27T23:05:14.016Z"))}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-muted text-sm">posted by:</p>
          <div className="flex items-center gap-2">
            <Avatar className="size-8 xs:size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-dark font-bold text-sm xs:text-base">John Doe</h2>
              <p className="text-muted text-xs xs:text-sm">test@gmail.com</p>
            </div>
          </div>
        </div>
        <Alert className="border-border my-2">
          <PackageSearch />
          <AlertTitle className="text-dark font-semibold">Product</AlertTitle>
          <AlertDescription className="text-muted">
            SpeedDry Hair Dryer
          </AlertDescription>
        </Alert>
        <Alert className="bg-red-50 border-red-300">
          <AlertTitle className="text-red-800 font-semibold uppercase">
            Reported Issue!
          </AlertTitle>
          <AlertDescription className="text-red-500">
            Very noisy and gets too hot quickly.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default Details;
