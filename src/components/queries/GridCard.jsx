import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircle, MessageCircleWarning } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { Button, buttonVariants } from "../ui/button";
import { useProvider } from "@/store/Provider";

const GridCard = ({
  id,
  productName,
  productBrand,
  productImageURL,
  queryTitle,
  boycottingReason,
  recommendationCount,
  isUserQuery = false,
  query,
  setSelectedId,
  setOpen,
}) => {
  const { setQueryToEdit } = useProvider();

  const navigate = useNavigate();

  return (
    <Card className="bg-background border-none shadow-none pt-0 overflow-clip gap-3 pb-4 justify-between h-full">
      <CardHeader className="px-0 relative">
        <img
          src={productImageURL}
          alt=""
          className="aspect-[16/12] object-cover w-full"
        />
        <div className="absolute top-2 xs:top-4 right-2 xs:right-4">
          <Badge className="bg-accent text-dark dark:text-black rounded-full font-semibold xs:text-sm">
            <MessageCircle />
            {recommendationCount}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-2 xs:px-4 flex flex-col gap-2">
        <h2 className="xs:text-lg sm:text-xl font-bold text-dark">
          {productName}
        </h2>
        <p className="text-sm text-muted font-semibold flex items-center gap-2 flex-wrap">
          by{" "}
          <Badge
            className={"rounded-full bg-blue-200 text-blue-800 font-semibold"}
          >
            {productBrand}
          </Badge>{" "}
        </p>
        <Alert className="border-none bg-white dark:bg-zinc-700 my-2 hidden md:grid">
          <MessageCircleWarning />
          <AlertTitle className="text-dark font-semibold">Question!</AlertTitle>
          <AlertDescription className="text-muted dark:text-dark/80">
            {queryTitle}
          </AlertDescription>
        </Alert>
        <Alert className="bg-red-50 border-red-300 hidden sm:grid">
          <AlertTitle className="text-red-800 font-semibold uppercase">
            Reported Issue!
          </AlertTitle>
          <AlertDescription className="text-red-500">
            {boycottingReason}
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter className="px-2 xs:px-4 flex-col gap-2">
        <Link
          to={`/query/${id}`}
          className={buttonVariants({
            variant: "default",
            className:
              "w-full font-semibold !text-dark !bg-yellow-300 xs:text-sm text-xs !h-8 xs:!h-9",
          })}
        >
          {!isUserQuery ? "Recommend" : "View Details"}
        </Link>
        {isUserQuery && (
          <>
            <Button
              className={
                "w-full font-semibold bg-blue-700 hover:bg-blue-700 text-white xs:text-sm text-xs !h-8 xs:!h-9"
              }
              onClick={() => {
                setQueryToEdit(query);
                navigate("/query/update");
              }}
            >
              Update
            </Button>
            <Button
              className={
                "w-full font-semibold hover:bg-primary xs:text-sm text-xs !h-8 xs:!h-9"
              }
              onClick={() => {
                setSelectedId(id);
                setOpen(true);
              }}
            >
              Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default GridCard;
