import { useEffect, useState } from "react";

interface UseFetchReturn<T> {
  readonly data: Nullable<T>;
  readonly error: Nullable<Error>;
  readonly loading: boolean;
}

const useFetch = <T>(url: string): UseFetchReturn<T> => {
  const [data, setData] = useState<Nullable<T>>(null);
  const [error, setError] = useState<Nullable<Error>>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url);
        const dataObject = await response.json();

        setData(dataObject);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
