import Link from "next/link";
import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";


type AuthFormProps = {
  fetchError: string;
  isLoggingIn: boolean;
  handleFormSubmit: (data: any) => void;
  formName: string;
  message?: string;
}

export const AuthForm: FunctionComponent<AuthFormProps> = ({fetchError, isLoggingIn, handleFormSubmit, formName, message = ""}: AuthFormProps): JSX.Element => {

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { login: "", password: "" } });

  return (
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-5 px-10 py-20 border-[1px] border-black/5 rounded-2xl shadow-sm backdrop-blur-xl bg-white/10">
        <h1 className="font-bold text-3xl text-center">{formName}</h1>
        {fetchError && <p className="text-xs text-red-600 text-center">{fetchError}</p>}
        <input {...register("login", { required: "Username is required!" })} placeholder="Username" autoFocus className="text-sm px-5 py-2 border-[1px] border-gray-300 rounded-full shadow-md text-background-color bg-gray-100 outline-none placeholder:text-gray-400 focus:bg-white" />
        {errors.login && <p className="text-xs text-red-600 text-center">{errors.login?.message}</p>}
        <input type="password" {...register("password", { required: "Password is required!" })} placeholder="Password" className="text-sm px-5 py-2 border-[1px] border-gray-300 rounded-full shadow-md text-background-color bg-gray-100 outline-none placeholder:text-gray-400 focus:bg-white" />
        {errors.password && <p className="text-xs text-red-600 text-center">{errors.password?.message}</p>}
        <input type="submit" name="submit" id="submit" value={formName == "Login" ? "Log In" : "Sign up"} disabled={isLoggingIn} className="text-white bg-background-color p-2 border-[1px] border-background-color rounded-full transition-colors duration-300 hover:cursor-pointer hover:bg-white hover:text-background-color disabled:opacity-20 disabled:pointer-events-none" />
        {formName == "Login" && <p className="text-black text-xs text-center">Don't have an account? <Link href="/signup" className="text-blue-700 hover:underline">Sign Up</Link>.</p>}
        {message && <p className="text-xs text-blue-600 text-center max-w-48 self-center">{message}</p>}
      </form>
  );
}
