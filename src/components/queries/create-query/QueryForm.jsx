import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useApi } from "@/hooks/useApi";
import { useProvider } from "@/store/Provider";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const QueryForm = ({ isToUpdate = false }) => {
  const { queryToEdit } = useProvider();

  const [productName, setProductName] = useState(
    queryToEdit?.productName || ""
  );
  const [productBrand, setProductBrand] = useState(
    queryToEdit?.productBrand || ""
  );
  const [productImage, setProductImage] = useState(
    queryToEdit?.productImage || ""
  );
  const [queryTitle, setQueryTitle] = useState(queryToEdit?.queryTitle || "");
  const [boycottingReason, setBoycottingReason] = useState(
    queryToEdit?.boycottingReason || ""
  );

  const { runQuery, isLoading } = useApi({
    onSuccess: (data) => {
      toast.success(data.message);

      if (!isToUpdate) {
        setProductName("");
        setProductBrand("");
        setProductImage("");
        setQueryTitle("");
        setBoycottingReason("");
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isToUpdate) {
      const newObject = {
        productName,
        productBrand,
        productImage,
        queryTitle,
        boycottingReason,
      };

      const updatedQuery = {};

      for (const query in newObject) {
        if (queryToEdit[query] !== newObject[query]) {
          updatedQuery[query] = newObject[query];
        }
      }

      if (Object.keys(updatedQuery).length === 0) {
        return toast.error("No fields were changed");
      }

      runQuery({
        url: `query/${queryToEdit?._id}`,
        method: "PATCH",
        data: updatedQuery,
      });

      return;
    }

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
