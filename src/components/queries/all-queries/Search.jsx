import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router";

const SearchQueries = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchText, setSearchText] = useState(
    searchParams?.get("search") || ""
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!searchText) {
        searchParams.delete("search");
      } else {
        searchParams.set("search", searchText);
      }
      setSearchParams(searchParams);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <div className="grow md:grow-0 flex items-center gap-2 border-border xs:h-10 bg-white border pr-2 rounded-md">
      <Input
        type={"text"}
        placeholder="Search queries"
        className="bg-transparent border-none shadow-none placeholder:text-muted placeholder:font-medium text-dark font-medium placeholder:text-sm"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Search />
    </div>
  );
};

export default SearchQueries;
