import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../hooks/useToken';
import Loading from '../Shared/Loading';
import LoginAnimation from './LoginAnimation/LoginAnimation.jsx';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [token] = useToken(user || gUser);

      const navigate = useNavigate()
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";


      if(token){
        navigate(from, { replace: true });
      }

      let signError;

      if(loading || gLoading){
          return <Loading></Loading>
      }

      if(error || gError){
          signError= <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
      }
    const onSubmit = data =>{
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (
      <div className="grid sm:grid-cols-1 my-12 md:grid-cols-2 gap-10 justify-center items-center">
        <div>
          <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="text-center text-4xl font-bold text-lime-500">
                  Login
                </h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="form-control w-full max-w-xs"
                >
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "provide a valid email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="level-text-alt text-rose-600">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="level-text-alt text-rose-600">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="level-text-alt text-rose-600">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="level-text-alt text-rose-600">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                  {signError}
                  <input className="btn mt-8" type="submit" value="Login" />
                </form>
                <p>
                  <small>
                    New to Bike parts house{" "}
                    <Link className="text-green-400" to="/register">
                      Create New User
                    </Link>
                  </small>
                </p>
                <div className="divider">OR</div>
                <button
                  onClick={() => signInWithGoogle()}
                  className="btn btn-outline btn-accent"
                >
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <LoginAnimation></LoginAnimation>
        </div>
      </div>
    );
};

export default Login;