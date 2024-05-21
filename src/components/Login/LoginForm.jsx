"use client"
import { AllContext } from "@/context/AllContext";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const { login } = useContext(AllContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        login(data.username, data.password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. <br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input {...register("username", { required: true })} type="text" placeholder="username" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                        <p className="text-center">Do not have account? <Link href={"/signup"} className="text-blue-600 hover:text-blue-900">Register now</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;