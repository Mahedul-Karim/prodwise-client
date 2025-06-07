import { axiosInstace } from "@/lib/utils";
import { useProvider } from "@/store/Provider";
import React, { useState } from "react";

export const useApi = ({ onSuccess, onError }) => {
  const { token } = useProvider();

  const [isLoading, setIsLoading] = useState(false);

  const runQuery = async ({ method = "GET", data, url }) => {
    try {
      setIsLoading(true);

      const res = await axiosInstace({
        url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method,
        data,
      });

      if (!res.data.success) {
        throw new Error(data.message);
      }

      onSuccess(res.data);
    } catch (error) {
      onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { runQuery, isLoading };
};
