"use client"

import { useForm } from "react-hook-form";

export type Props = {
  title?: string;
};

export default function Teste({ title }: Props){
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex-1 bg-red-400">
      <form onSubmit={ handleSubmit((data)=> console.log(data))}>
        <input {...register("login", {required: true})} placeholder="Login"/>
        <input {...register("password", {required: true})} placeholder="Password"/>
        <input type="submit" name="submit" id="submit" />
      </form>
    </div>
  );
};
