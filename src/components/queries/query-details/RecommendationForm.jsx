import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useApi } from "@/hooks/useApi";
import { useProvider } from "@/store/Provider";
import { Loader, Star } from "lucide-react";
import React, { useReducer } from "react";
import { toast } from "sonner";

const initialState = {
  recommendationTitle: "",
  recommendedProductName: "",
  recommendedProductImage: "",
  recommendationReason: "",
};

const reducer = (state, action) => {
  if (action.type === "UPDATE") {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

  if (action.type === "RESET") {
    return initialState;
  }

  return state;
};

const RecommendationForm = ({ data, setData, setRecommendations }) => {
  const { user } = useProvider();

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    recommendationTitle,
    recommendedProductName,
    recommendedProductImage,
    recommendationReason,
  } = state;

  const { isLoading, runQuery } = useApi({
    onSuccess: (data) => {
      toast.success(data.message);
      setData(data.query);
      setRecommendations((prev) => [...prev, data.recommendation]);
      dispatch({ type: "RESET" });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      return toast.error("Login first to recommend");
    }

    if (user?.email === data?.creatorEmail) {
      return toast.error("You can not recommend in your own query");
    }

    const recData = {
      ...state,
      userEmail: data?.creatorEmail,
      userName: data?.creatorName,
      queryId: data?._id,
      queryTitle: data?.queryTitle,
      productName: data?.productName,
    };

    runQuery({
      url: "recommendation",
      method: "POST",
      data: recData,
    });
  };

  return (
    <section className="p-6 bg-white dark:bg-border/10 rounded-md mt-10">
      <h3 className="flex items-center gap-2 text-lg sm:text-xl text-dark font-bold justify-center">
        <Star className="text-yellow-500 shrink-0" /> Add Your Recommendation
      </h3>
      <form
        className="mt-6 space-y-8 max-w-[700px] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="space-y-3">
          <Label className="font-semibold text-dark">
            Recommendation Title:
          </Label>
          <Input
            type={"text"}
            placeholder="Great alternatives of the product"
            className="h-11 px-4 placeholder:text-muted/60 text-dark placeholder:text-sm !text-base font-medium dark:bg-transparent dark:border-border/20"
            value={recommendationTitle}
            onChange={(e) =>
              dispatch({
                field: "recommendationTitle",
                type: "UPDATE",
                value: e.target.value,
              })
            }
            disabled={isLoading}
          />
        </div>
        <div className="space-y-3">
          <Label className="font-semibold text-dark">
            Recommended product Name:
          </Label>
          <Input
            type={"text"}
            placeholder="Name of the recommended product"
            className="h-11 px-4 placeholder:text-muted/60  text-dark placeholder:text-sm !text-base font-medium dark:bg-transparent dark:border-border/20"
            value={recommendedProductName}
            onChange={(e) =>
              dispatch({
                field: "recommendedProductName",
                type: "UPDATE",
                value: e.target.value,
              })
            }
            disabled={isLoading}
          />
        </div>
        <div className="space-y-3">
          <Label className="font-semibold text-dark">
            Recommended Product Image:
          </Label>
          <Input
            type={"text"}
            placeholder="https://example.com"
            className="h-11 px-4 placeholder:text-muted/60  text-dark placeholder:text-sm !text-base font-medium dark:bg-transparent dark:border-border/20"
            value={recommendedProductImage}
            onChange={(e) =>
              dispatch({
                field: "recommendedProductImage",
                type: "UPDATE",
                value: e.target.value,
              })
            }
            disabled={isLoading}
          />
        </div>
        <div className="space-y-3">
          <Label className="font-semibold text-dark">
            Recommendation reason:
          </Label>
          <Textarea
            placeholder="Share your experience and why this product would be great alternative"
            className="h-24 px-4 placeholder:text-muted/60  text-dark placeholder:text-sm !text-base font-medium dark:bg-transparent dark:border-border/20"
            value={recommendationReason}
            onChange={(e) =>
              dispatch({
                field: "recommendationReason",
                type: "UPDATE",
                value: e.target.value,
              })
            }
            disabled={isLoading}
          />
        </div>
        <Button className="font-semibold h-10 w-full" disabled={isLoading}>
          {isLoading && <Loader className="animate-spin" />} Add Recommendation
        </Button>
      </form>
    </section>
  );
};

export default RecommendationForm;
