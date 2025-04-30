import { useEffect, useState } from "react";

type useFetchResponse<T> = {
  data: T[];
  isLoading: boolean;
  isError: boolean;
};

export function useFetch<T>(url: string): useFetchResponse<T> {
  const [items, setItems] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchUsers = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        // throw new Error("Error");
        await new Promise((resolve) => setTimeout(resolve, 500));
        const response = await fetch(url, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setItems(data);
      } catch (error) {
        if ((error as any).name !== "AbortError") {
          console.log(error);
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    data: items,
    isLoading,
    isError,
  };
}
