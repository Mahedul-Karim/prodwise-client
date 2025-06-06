import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import React from "react";

const RecommendationForm = () => {
  return (
    <section className="p-6 bg-white rounded-md mt-10">
      <h3 className="flex items-center gap-2 text-lg sm:text-xl text-dark font-bold justify-center">
        <Star className="text-yellow-500 shrink-0" /> Add Your Recommendation
      </h3>
      <form className="mt-6 space-y-8 max-w-[700px] mx-auto">
        <div className="space-y-3">
          <Label className="font-semibold text-dark">
            Recommendation Title:
          </Label>
          <Input
            type={"text"}
            placeholder="Great alternatives of the product"
            className="h-11 px-4 placeholder:text-muted/60  text-dark placeholder:text-sm !text-base font-medium"
          />
        </div>
        <div className="space-y-3">
          <Label className="font-semibold text-dark">
            Recommended product Name:
          </Label>
          <Input
            type={"text"}
            placeholder="Name of the recommended product"
            className="h-11 px-4 placeholder:text-muted/60  text-dark placeholder:text-sm !text-base font-medium"
          />
        </div>
        <div className="space-y-3">
          <Label className="font-semibold text-dark">
            Recommended Product Image:
          </Label>
          <Input
            type={"text"}
            placeholder="https://example.com"
            className="h-11 px-4 placeholder:text-muted/60  text-dark placeholder:text-sm !text-base font-medium"
          />
        </div>
        <div className="space-y-3">
          <Label className="font-semibold text-dark">
            Recommendation reason:
          </Label>
          <Textarea
            placeholder="Share your experience and why this product would be great alternative"
            className="h-24 px-4 placeholder:text-muted/60  text-dark placeholder:text-sm !text-base font-medium"
          />
        </div>
        <Button className="font-semibold h-10 w-full">Add Recommendation</Button>
      </form>
    </section>
  );
};

export default RecommendationForm;
