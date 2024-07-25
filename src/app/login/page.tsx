"use client"

import { AuthForm } from "@/components/AuthForm";
import { handleFetchError } from "@/utils/handleFetchError";
import { useState } from "react";

export type InputProps = {
  login: string;
  password: string;
}

const INVALID_CREDENTIALS_ERROR = "Invalid Username or Password!";

export default function LoginPage() {
  const [fetchError, setFetchError] = useState<string>("");
  const [loggingIn, setLoggingIn] = useState<boolean>(false);

  const handleFormSubmit = async (data: any) => {

    setLoggingIn(true);

    if (fetchError) {
      setFetchError("");
    }

    try {
      const response = await fetchLogin(data);

      if (!response.ok) {
        throw new Error(INVALID_CREDENTIALS_ERROR);
      }

      const responseData = await response.text();

      sessionStorage.setItem("token", responseData);
    } catch (error: unknown) {
        handleFetchError(error, setFetchError, INVALID_CREDENTIALS_ERROR);
    } finally {
        setLoggingIn(false);
    }
  }

  const fetchLogin = async (data: any): Promise<Response> => {
    return fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <div className="flex flex-1 justify-center items-center p-5">
      <AuthForm
        formName="Login"
        fetchError={fetchError}
        loggingIn={loggingIn}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};
