import Highlight from "@/components/common/Highlight";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="grid sm:grid-cols-2 gap-2">
      <div className="flex flex-col items-center sm:items-start justify-center gap-2 relative z-[1] sm:pl-4">
        <div className="absolute top-[25px] right-0 w-48 h-48 bg-primary opacity-10 rounded-full blur-2xl z-[-1]" />
        <div className="absolute bottom-0 left-[30px] w-40 h-40 bg-primary opacity-10 rounded-full blur-2xl z-[-1]" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-[1.4] max-w-[510px] text-center sm:text-start">
          {
            <Highlight
              text={"Got Concerns? Ask the Right Questions."}
              highlight={"Concerns?"}
            />
          }
        </h1>
        <p className="text-muted font-medium sm:max-w-[450px] text-sm md:text-base lg:text-lg text-center sm:text-start">
          Share your thoughts, compare options, and help shape better product
          decisions — starting with your own query.
        </p>
        <div>
          <Button
            className="sm:h-10 font-semibold rounded-full mt-2 sm:px-8 px-5 hover:bg-primary hover:scale-[1.1]"
            onClick={() => navigate("/query/create")}
          >
            <Plus /> Add New Query
          </Button>
        </div>
      </div>
      <div className="flex items-center relative z-[1]">
        <div className="absolute bottom-0 right-[30px] w-48 h-48 bg-[#FF6A3D] opacity-30 rounded-full blur-2xl z-[-1]" />
        <img
          src={"/search.png"}
          alt=""
          className="max-h-[270px] xs:max-h-[320px] sm:max-h-[450px] w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
