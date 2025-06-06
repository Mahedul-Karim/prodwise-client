import Container from "@/components/common/Container";
import Title from "@/components/home/sections/Title";
import QueryForm from "@/components/queries/create-query/QueryForm";
import React from "react";

const CreateQuery = () => {
  return (
    <main className="bg-background py-8 md:py-16 border-t border-border">
      <Container className="bg-white p-6 rounded-md shadow-md max-w-[700px]">
        <Title className="!my-0">Add New Query</Title>
        <QueryForm />
      </Container>
    </main>
  );
};

export default CreateQuery;
