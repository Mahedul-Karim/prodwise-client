import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Loader, Trash } from "lucide-react";
import { formateDate } from "@/lib/utils";
import { useApi } from "@/hooks/useApi";
import { toast } from "sonner";

const RecommendationTable = ({
  isUserRecommendations = false,
  data = [],
  setData,
}) => {
  const [open, setOpen] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const { isLoading, runQuery } = useApi({
    onSuccess: (data) => {
      setData((prev) => prev.filter((rec) => rec._id !== selectedId));
      toast.success(data.message);
      setSelectedId(null);
      setOpen(false);
    },
    onError: (err) => toast.error(err.message),
  });

  const handleDelete = () => {
    runQuery({
      url: `recommendation/${selectedId}`,
      method: "DELETE",
    });
  };

  return (
    <div className="mt-6 overflow-auto border border-border rounded-md">
      <Table>
        <TableHeader className="bg-muted/10">
          <TableRow>
            <TableHead>Product</TableHead>
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
                <p className="text-muted font-medium">{rec?.recommenderName}</p>
              </TableCell>
              <TableCell>
                <p className="text-dark font-semibold">
                  {formateDate(new Date(rec?.currentTime))}
                </p>
              </TableCell>
              <TableCell>
                {isUserRecommendations && (
                  <Button
                    variant="ghost"
                    className="hover:bg-muted/10"
                    onClick={() => {
                      setSelectedId(rec?._id);
                      setOpen(true);
                    }}
                  >
                    <Trash />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-border">
          <DialogHeader>
            <DialogTitle className="text-dark font-semibold">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className="text-muted font-semibold">
              This action cannot be undone. This will delete your
              recommendation.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              className="border-border text-dark hover:bg-muted/5 font-semibold"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleDelete} disabled={isLoading}>
              {isLoading && <Loader className="animate-spin" />}
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RecommendationTable;
