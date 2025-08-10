import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CountUp from "react-countup";

const CounterCard = ({ icon, title, suffix, subtitle }) => {
  return (
    <Card className="border-none bg-white dark:bg-border/5 shadow-none">
      <CardContent className="items-center flex flex-col gap-1">
        <div>
          <img src={icon} alt="" className="size-16 object-cover" />
        </div>
        <p className="text-lg xs:text-xl font-bold text-dark">
            <CountUp end={title} suffix={suffix} duration={5} />
        </p>
        <p className="font-medium text-muted text-sm xs:text-base text-center">{subtitle}</p>
      </CardContent>
    </Card>
  );
};

export default CounterCard;
