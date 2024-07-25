import { Dispatch, SetStateAction } from "react";

export const handleFetchError = (error: unknown, setFetchError: Dispatch<SetStateAction<string>>, errorMessage: string): void => {
  if (error instanceof Error) {
    if (error.message == errorMessage) {
      setFetchError(error.message);
    } else {
      setFetchError("Servers are unavailable. Please, try again later!");
    }
  } else {
    setFetchError("An unexpected error occurred.");
  }
}
