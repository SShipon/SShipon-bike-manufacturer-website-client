import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.jsx";
import Loading from "../../Shared/Loading/Loading.jsx";
import RegisterAnimation from "../RegisterAnimation/RegisterAnimation.jsx";
const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate()

  let singErrorMessage;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    singErrorMessage = (
      <p className="text-red-500">
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }

  if (user || gUser) {
    console.log(user, gUser);
  }

  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log('user updated');
    navigate('/home')
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 flex justify-center items-center">
      <div className="card lg:max-w-lg">
        <RegisterAnimation></RegisterAnimation>
      </div>
      <div className="card lg:max-w-lg">
        <div className="flex h-screen justify-center items-center my-20">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold text-purple-800">
                {" "}
                Please Register
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "pattern" && (
                      <span className="label-text-alt text-red-600">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
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
                    <span className="label-text">Password</span>
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
                <input
                  class="btn w-full max-w-xs"
                  type="submit"
                  value="REGISTER"
                />
              </form>
              <small>
                <p>
                  Already have a account?{" "}
                  <Link to="/login" className="text-cyan-600">
                    Please Login
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
    </div>
  );
};

export default Register;
