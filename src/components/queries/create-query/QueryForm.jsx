import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useApi } from "@/hooks/useApi";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const QueryForm = () => {
  const [productName, setProductName] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productImage, setProductImage] = useState("");
  const [queryTitle, setQueryTitle] = useState("");
  const [boycottingReason, setBoycottingReason] = useState("");

  const { runQuery, isLoading } = useApi({
    onSuccess: (data) => {
      toast.success(data.message);
      setProductName("");
      setProductBrand("");
      setProductImage("");
      setQueryTitle("");
      setBoycottingReason("");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    runQuery({
      url: "query",
      method: "POST",
      data: {
        productName,
        productBrand,
        productImage,
        queryTitle,
        boycottingReason,
      },
    });
  };

  return (
    <div className="mt-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Product Name:</Label>
          <Input
            type={"text"}
            placeholder="Type the name of product you are getting problem with"
            className="h-11 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Product Brand:</Label>
          <Input
            type={"text"}
            placeholder="Type the name of company of the product"
            className="h-11 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
            value={productBrand}
            onChange={(e) => setProductBrand(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Product Image URL:</Label>
          <Input
            type={"text"}
            placeholder="Type the link of an image of the product"
            className="h-11 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Query Title:</Label>
          <Input
            type={"text"}
            placeholder="Is there any Better product that gives me the same quality?"
            className="h-11 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
            value={queryTitle}
            onChange={(e) => setQueryTitle(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label className="font-semibold text-dark">Boycotting Reason:</Label>
          <Textarea
            placeholder="the reason you don’t want this product"
            className="h-24 px-4 placeholder:text-muted placeholder:font-medium text-dark placeholder:text-sm !text-base font-medium"
            value={boycottingReason}
            onChange={(e) => setBoycottingReason(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <Button className="w-full font-semibold h-10" disabled={isLoading}>
          {" "}
          {isLoading && <Loader className="animate-spin" />} Add Query
        </Button>
      </form>
    </div>
  );
};

export default QueryForm;
