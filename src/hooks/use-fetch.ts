import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface UseFetchReturn<T> {
  readonly data: Nullable<T>;
  readonly error: Nullable<Error>;
  readonly loading: boolean;
  readonly updateRequestOptions: Dispatch<SetStateAction<RequestOptions>>;
  readonly updateBody: Dispatch<SetStateAction<BodyObject>>;
}

type RequestOptions = {
  method: string;
  headers: HeadersInit;
};

const defaultRequestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" }
};

const useFetch = <T>(
  url: string,
  initialRequestOptions: RequestOptions = defaultRequestOptions,
  initialBody: BodyObject = {}
): UseFetchReturn<T> => {
  const [requestOptions, updateRequestOptions] = useState<RequestOptions>(
    initialRequestOptions
  );
  const [body, updateBody] = useState<BodyObject>(initialBody);
  const [data, setData] = useState<Nullable<T>>(null);
  const [error, setError] = useState<Nullable<Error>>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const fetchOptions: RequestOptions = {
          ...requestOptions,
          ...{
            body: ["POST", "PUT"].includes(requestOptions?.method)
              ? JSON.stringify(body)
              : undefined
          }
        };

        const response: Response = await fetch(url, fetchOptions);
        const dataObject: T = (await response.json()) as T;

        setData(dataObject);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, requestOptions, body]);

  return { data, error, loading, updateRequestOptions, updateBody };
};

export default useFetch;
