import Container from "@/components/common/Container";
import Title from "@/components/home/sections/Title";
import QueryForm from "@/components/queries/create-query/QueryForm";
import React, { useEffect } from "react";

const UpdateQuery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="bg-background py-8 md:py-16 border-t border-border">
      <Container className="bg-white p-6 rounded-md shadow-md max-w-[700px]">
        <Title className="!my-0">Update Query</Title>
        <QueryForm isToUpdate />
      </Container>
    </main>
  );
};

export default UpdateQuery;
