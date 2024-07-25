"use client"

import { AuthForm } from "@/components/AuthForm";
import { useState } from "react";

export default function SignUpPage(){
  const [fetchError, setFetchError] = useState<string>("");
  const [loggingIn, setLoggingIn] = useState<boolean>(false);

  const handleFormSubmit = (data: any):void => {

  }

  return (
    <div className="flex flex-1 justify-center items-center p-5">
      <AuthForm
        formName="Sign Up"
        fetchError={fetchError}
        loggingIn={loggingIn}
        handleFormSubmit={handleFormSubmit}
      />

    </div>
  )
}
