import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.jsx";
import Loading from "../../Shared/Loading/Loading.jsx";
import LoginAnimation from "../LoginAnimation/LoginAnimation.jsx";
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let singErrorMessage;

  const navigate = useNavigate()
  const location = useLocation()
   let from = location.state?.from?.pathname || "/";

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    singErrorMessage = (
      <p className="text-red-500">{error?.message || gError?.message}</p>
    );
  }

  if (user || gUser) {
     navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 flex justify-center items-center">
      <div className="card lg:max-w-lg">
        <div className="flex h-screen justify-center items-center my-16">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold text-purple-800">
                Login
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"> Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9+@[a-z]+\.[a-z]{2,3}/,
                        message: "provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text"> Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Your Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-600">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === " minLength" && (
                      <span className="label-text-alt text-red-600">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                {singErrorMessage}
                <input class="btn w-full max-w-xs" type="submit" value="LOGIN" />
              </form>
              <small>
                <p>
                  New to Register{" "}
                  <Link to="/register" className="text-cyan-600">
                    Create New Account
                  </Link>
                </p>
              </small>
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline btn-secondary"
              >
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card lg:max-w-lg">
        <LoginAnimation></LoginAnimation>
      </div>
    </div>
  );
};

export default Login;
<h1>this is login</h1>;
