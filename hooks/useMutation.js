import { useCallback, useState } from "react";

export const UseMutation = () => {
  const [data, setData] = useState({
    data: null,
    isLoading: true,
    isError: false,
  });

  const mutationData = useCallback(
    async ({ url = "", method = "POST", payload = {} } = {}) => {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const result = await response.json();
        setData({
          ...data,
          data: result,
          isLoading: false,
        });
        return { ...result };
      } catch (error) {
        setData({
          ...data,
          isError: true,
          isLoading: false,
        });
        return error;
      }
    },
    []
  );

  return { ...data, mutationData };
};
