import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const QueryForm = () => {
  return (
    <div className="mt-6">
      <form className="space-y-4">
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Product Name:</Label>
          <Input
            type={"text"}
            placeholder="Type the name of product you are getting problem with"
            className="h-11 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Product Brand:</Label>
          <Input
            type={"text"}
            placeholder="Type the name of company of the product"
            className="h-11 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Product Image URL:</Label>
          <Input
            type={"text"}
            placeholder="Type the link of an image of the product"
            className="h-11 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Query Title:</Label>
          <Input
            type={"text"}
            placeholder="Is there any Better product that gives me the same quality?"
            className="h-11 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
          />
        </div>
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Boycotting Reason:</Label>
          <Textarea
            placeholder="the reason you don’t want this product"
            className="h-24 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
          />
        </div>
        <Button className="w-full font-semibold h-10" >Add Query</Button>
      </form>
    </div>
  );
};

export default QueryForm;
