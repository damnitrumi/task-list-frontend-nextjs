"use client"

import { useForm } from "react-hook-form";

export type Props = {
  title?: string;
};

export default function Teste({ title }: Props) {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex flex-1 justify-center items-center p-5">
      <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-5 px-10 py-20 border-[1px] border-black/5 rounded-2xl shadow-sm backdrop-blur-xl bg-white/10">
        <h1 className="font-bold text-3xl text-center">Login</h1>
        <input {...register("login", { required: true })} placeholder="Login" autoFocus className="text-sm px-5 py-2 border-[1px] border-gray-300 rounded-full shadow-md text-background-color bg-gray-100 outline-none placeholder:text-gray-400 focus:bg-white" />
        <input type="password" {...register("password", { required: true })} placeholder="Password" className="text-sm px-5 py-2 border-[1px] border-gray-300 rounded-full shadow-md text-background-color bg-gray-100 outline-none placeholder:text-gray-400 focus:bg-white" />
        <input type="submit" name="submit" id="submit" value="Log In" className="text-white bg-background-color p-2 border-[1px] border-background-color rounded-full transition-colors duration-300 hover:cursor-pointer hover:bg-white hover:text-background-color" />
        <p className="text-black text-xs text-center">Don't have an account? Sign Up</p>
      </form>
    </div>
  );
};
