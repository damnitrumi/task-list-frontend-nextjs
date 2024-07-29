"use client"

import { AuthForm } from "@/components/AuthForm";
import { StandardError } from "@/lib/types/StandardError";
import { handleFetchError } from "@/lib/utils/handleFetchError";
import { FunctionComponent, useState } from "react";
import { useRouter } from "next/navigation";

type SignUpSuccess = {
  id: number;
  username: string;
  createdAt: string;
}

type ResponseData = SignUpSuccess | StandardError

export const SignUp:FunctionComponent = ():JSX.Element => {
  const [fetchError, setFetchError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [signUpMessage, setSignUpMessage] = useState("");
  const router = useRouter();

  const handleFormSubmit = async (data: any) => {
    setIsLoggingIn(true);

    if (fetchError) {
      setFetchError("");
    }

    try {
      const response = await fetchSignUp(data);

      const responseData: ResponseData = await response.json();

      if (response.status === 400) {
        const errorResponse = responseData as StandardError;
        throw new Error(errorResponse.error);
      }

      setSignUpMessage("Account created successfully! Redirecting to Login page.")

      setTimeout(()=> {
        router.push("/login");
      }, 3000)

    } catch (error: any) {
      handleFetchError(error, setFetchError, error.message)
    } finally {
      setIsLoggingIn(false);
    }
  }

  const fetchSignUp = (data: any) => {
    return fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <div className="flex flex-1 justify-center items-center p-5">
      <AuthForm
        formName="Sign Up"
        fetchError={fetchError}
        isLoggingIn={isLoggingIn}
        handleFormSubmit={handleFormSubmit}
        message={signUpMessage}
      />
    </div>
  )
}
