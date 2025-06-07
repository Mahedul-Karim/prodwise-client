import Container from "@/components/common/Container";
import Empty from "@/components/error/Empty";
import GridQueries from "@/components/queries/all-queries/GridQueries";
import ListQueries from "@/components/queries/all-queries/ListQueries";
import SearchQueries from "@/components/queries/all-queries/Search";
import { Button } from "@/components/ui/button";
import { useApi } from "@/hooks/useApi";
import { Grid2x2, ListCollapse, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const AllQueries = () => {
  const [active, setActive] = useState("grid");

  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const { getQuery, isLoading } = useApi();

  const [data, setData] = useState([]);

  useEffect(() => {
    getQuery({
      url: `query?search=${search}`,
    }).then((res) => setData(res?.queries));
  }, [search]);

  return (
    <main className="border-t border-border py-8 md:py-16">
      <Container>
        <div className="flex items-center justify-end gap-2 xs:gap-4">
          <div className="bg-primary/10 p-1 rounded-md flex items-center gap-1 border border-primary/5">
            <Button
              className={`px-0 py-0 duration-0 size-6 xs:size-7  transition-none has-[>svg]:px-0 ${
                active === "grid"
                  ? "bg-primary text-white hover:bg-primary"
                  : "bg-transparent text-dark hover:bg-transparent"
              }`}
              onClick={() => setActive("grid")}
            >
              <Grid2x2 className="size-4 xs:size-5" />
            </Button>
            <Button
              className={`px-0 transition-none duration-0 py-0 size-6 xs:size-7  has-[>svg]:px-0 ${
                active === "list"
                  ? "bg-primary text-white hover:bg-primary"
                  : "bg-transparent text-dark hover:bg-transparent"
              }`}
              onClick={() => setActive("list")}
            >
              <ListCollapse className="size-4 xs:size-5" />
            </Button>
          </div>
          <SearchQueries />
        </div>
        <section className="mt-8">
          {isLoading && (
            <div className="grid place-items-center h-[200px]">
              <Loader className="size-12 text-primary animate-spin" />
            </div>
          )}
          {!isLoading && data?.length === 0 && (
            <div>
              <Empty title="No queries found!" />
            </div>
          )}
          {!isLoading && data?.length > 0 && (
            <>
              {active === "grid" && <GridQueries data={data} />}
              {active === "list" && <ListQueries data={data} />}
            </>
          )}
        </section>
      </Container>
    </main>
  );
};

export default AllQueries;
