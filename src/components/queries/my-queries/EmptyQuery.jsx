import Empty from "@/components/error/Empty";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const EmptyQuery = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-2">
      <Empty title={"You have not added any query yet!"} />
      <Button
        className="sm:h-10 font-semibold rounded-full mt-2 sm:px-8 px-5 hover:bg-primary hover:scale-[1.1]"
        onClick={() => navigate("/query/create")}
      >
        <Plus /> Add New Query
      </Button>
    </div>
  );
};

export default EmptyQuery;
