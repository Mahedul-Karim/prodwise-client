import Container from "@/components/common/Container";
import SearchQueries from "@/components/queries/all-queries/Search";
import { Button } from "@/components/ui/button";
import { Grid2x2, ListCollapse } from "lucide-react";
import React, { useState } from "react";

const AllQueries = () => {
  const [active, setActive] = useState("grid");

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
      </Container>
    </main>
  );
};

export default AllQueries;
