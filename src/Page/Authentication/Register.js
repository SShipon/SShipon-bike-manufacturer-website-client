import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../hooks/useToken';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    const navigate = useNavigate();

    if(token){
        navigate('/dashboard')
    }

    let signError;

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    const onSubmit = data =>{
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex my-10 justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-4xl font-bold text-lime-500">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">

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
                                        message: 'Name is Required'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type="email" placeholder="Email Address"
                             className="input input-bordered w-full max-w-xs" 
                             {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                  },
                                pattern: {
                                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                  message: 'provide a valid email'
                                }
                              })}
                             />

                              <label className="label">
                              {errors.email?.type === 'required' && <span className='level-text-alt text-rose-600'>{errors.email.message}</span>}
                              {errors.email?.type === 'pattern' && <span className='level-text-alt text-rose-600'>{errors.email.message}</span>}
                            </label>

                            <label className="label">
                                <span className="label-text"> Password</span>
                            </label>

                            <input type="password" name='password' placeholder="New Password"
                             className="input input-bordered w-full max-w-xs" 
                             {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                  },
                                  minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                              })}
                             />
                             <label className="label">
                              {errors.password?.type === 'required' && <span className='level-text-alt text-rose-600'>{errors.password.message}</span>}
                              {errors.password?.type === 'minLength' && <span className='level-text-alt text-rose-600'>{errors.password.message}</span>}
                            </label>

                              {signError}

                             <input className='btn mt-8' type="submit" value='Signup' />
                    </form>
                    <p><small>Already have an account  <Link className='text-green-400' to='/login'>Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;