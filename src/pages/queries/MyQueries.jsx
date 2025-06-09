import Container from "@/components/common/Container";
import Title from "@/components/home/sections/Title";
import GridCard from "@/components/queries/GridCard";
import Banner from "@/components/queries/my-queries/Banner";
import EmptyQuery from "@/components/queries/my-queries/EmptyQuery";
import { useApi } from "@/hooks/useApi";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MyQueries = () => {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const { isLoading, getQuery } = useApi();

  const { isLoading: isDeleting, runQuery } = useApi({
    onSuccess: (data) => {
      setData((prev) => prev.filter((qu) => qu._id !== selectedId));
      toast.success(data.message);
      setSelectedId(null);
      setOpen(false);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  useEffect(() => {
    getQuery({
      url: "query/my-query",
    }).then((res) => setData(res.queries));
  }, []);

  const handleDelete = () => {
    runQuery({
      url: `query/${selectedId}`,
      method: "DELETE",
    });
  };

  return (
    <main className="border-t border-border">
      <Container className="py-8 md:py-16">
        <Banner />
        <div className="mt-8">
          <Title>My Queries</Title>
          {isLoading && (
            <div className="h-50 grid place-items-center">
              <Loader className="text-primary size-12 animate-spin" />
            </div>
          )}
          {!isLoading && data?.length === 0 && <EmptyQuery />}

          {!isLoading && data?.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-4 gap-2">
              {data?.map((query) => (
                <GridCard
                  key={query._id}
                  id={query._id}
                  productName={query.productName}
                  productBrand={query.productBrand}
                  productImageURL={query.productImage}
                  queryTitle={query.queryTitle}
                  boycottingReason={query.boycottingReason}
                  recommendationCount={query.recommendationCount}
                  isUserQuery
                  query={query}
                  setSelectedId={setSelectedId}
                  setOpen={setOpen}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="border-border">
          <DialogHeader>
            <DialogTitle className="text-dark font-semibold">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className="text-muted font-medium">
              This action cannot be undone. This will delete your query from our
              servers.
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
            <Button onClick={handleDelete} disabled={isDeleting}>
              {isDeleting && <Loader className="animate-spin" />} Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default MyQueries;
