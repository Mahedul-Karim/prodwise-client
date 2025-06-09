import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { formateDate } from "@/lib/utils";

const RecommendationTable = ({
  isUserRecommendations = false,
  data = [],
  setData,
}) => {
  return (
    <div className="mt-6 overflow-auto border border-border rounded-md">
      <Table>
        <TableHeader className="bg-muted/10">
          <TableRow>
            <TableHead className="w-[350px]">Product</TableHead>
            <TableHead>Query</TableHead>
            <TableHead>Recommender Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((rec) => (
            <TableRow key={rec._id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <img
                    src={rec?.recommendedProductImage}
                    alt=""
                    className="shrink-0 w-[100px] aspect-[16/11] rounded-md"
                  />
                  <p className="text-dark font-bold max-w-[230px] truncate">
                    {rec?.recommendedProductName}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-muted font-medium max-w-[360px] truncate">
                  {rec?.queryTitle}
                </p>
              </TableCell>
              <TableCell>
                <p className="text-muted font-medium">{rec?.userName}</p>
              </TableCell>
              <TableCell>
                <p className="text-dark font-semibold">
                  {formateDate(new Date(rec?.currentTime))}
                </p>
              </TableCell>
              <TableCell>
                {isUserRecommendations && (
                  <Button variant="ghost" className="hover:bg-muted/10">
                    <Trash />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecommendationTable;
