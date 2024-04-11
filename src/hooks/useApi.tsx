import { useState } from 'react';

import { ErrorType, Nullable, isErrorType } from 'types';

export const useApi = <T, Args extends unknown[] = unknown[]>(
  request: (...args: Args) => Promise<T>,
): [typeof isLoading, typeof request, Nullable<typeof error>] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Nullable<ErrorType>>(null);

  const performRequest = async (...args: Args): Promise<T> => {
    setIsLoading(true);

    try {
      const response = await request(...args);
      setError(null);

      return response;
    } catch (err) {
      if (isErrorType(err)) {
        setError(err);
      }

      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, performRequest, error];
};
