import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { formateDate } from "@/lib/utils";
import { Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecommendationCard = () => {
  return (
    <Card className="border-border/50 shadow-none bg-background gap-4 py-4">
      <CardHeader className="px-2 xs:px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div>
            <img
              src={"https://i.ibb.co/rR2qSMbL/query-12.jpg"}
              alt=""
              className="md:w-[200px] aspect-[16/12] rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 grow">
            <h2 className="text-lg xs:text-xl font-bold text-dark">
              Looking for quiet hair dryers with similar speed?
            </h2>
            <p className="font-semibold text-primary text-sm xs:text-base">SpeedDry Hair Dryer</p>
            <p className="text-muted text-sm flex items-center gap-2 flex-wrap">
              <Clock className="size-4" />
              {formateDate(new Date("2025-05-27T23:05:14.016Z"))}
            </p>
            <div className="flex items-center gap-2">
            <Avatar className={'size-8 xs:size-9'}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-muted font-medium text-sm xs:text-base">John Doe</p>
          </div>
          </div>
          
        </div>
      </CardHeader>
      <CardContent className="px-2 xs:px-4">
        <p className="text-muted">This is incredibly quiet compared to traditional dryers and has excellent speed settings. The ionic technology also prevents heat damage.</p>
      </CardContent>
      
    </Card>
  );
};

export default RecommendationCard;
