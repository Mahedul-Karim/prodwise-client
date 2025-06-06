import { useProvider } from "@/store/Provider";
import { Loader } from "lucide-react";
import React from "react";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useProvider();

  if (isLoading) {
    return (
      <div className="h-screen grid place-items-center">
        <Loader className="text-primary animate-spin size-12" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoutes;
