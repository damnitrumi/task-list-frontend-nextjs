"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

export type Props = {
  title?: string;
};

export type InputProps = {
  login: string;
  password: string;
}

export default function LoginPage({ title }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { login: "", password: "" } });
  const [invalid, setInvalid] = useState(false);

  // console.log(errors);

  const handleFormSubmit = async (data: any) => {
    if(invalid){
      setInvalid(false);
    }
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setInvalid(true);
        throw new Error("Invalid Username or Password");
      }

      const responseData = await response.text();

      console.log(responseData);

      sessionStorage.setItem("token", responseData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }

  }

  return (
    <div className="flex flex-1 justify-center items-center p-5">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-5 px-10 py-20 border-[1px] border-black/5 rounded-2xl shadow-sm backdrop-blur-xl bg-white/10">
        <h1 className="font-bold text-3xl text-center">Login</h1>
        {invalid && <p className="text-xs text-red-600 text-center">Invalid Username/Password!</p>}
        <input {...register("login", { required: "Login is required!" })} placeholder="Username" autoFocus className="text-sm px-5 py-2 border-[1px] border-gray-300 rounded-full shadow-md text-background-color bg-gray-100 outline-none placeholder:text-gray-400 focus:bg-white" />
        {errors.login && <p className="text-xs text-red-600 text-center">{errors.login?.message}</p>}
        <input type="password" {...register("password", { required: "Password is required!" })} placeholder="Password" className="text-sm px-5 py-2 border-[1px] border-gray-300 rounded-full shadow-md text-background-color bg-gray-100 outline-none placeholder:text-gray-400 focus:bg-white" />
        {errors.password && <p className="text-xs text-red-600 text-center">{errors.password?.message}</p>}
        <input type="submit" name="submit" id="submit" value="Log In" className="text-white bg-background-color p-2 border-[1px] border-background-color rounded-full transition-colors duration-300 hover:cursor-pointer hover:bg-white hover:text-background-color" />
        <p className="text-black text-xs text-center">Don't have an account? Sign Up</p>
      </form>
    </div>
  );
};
