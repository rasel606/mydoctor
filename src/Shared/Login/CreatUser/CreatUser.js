import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loding from '../../Loding/Loding';

import GoogleLogin from '../SocialLogin/GoogleLogin.js/GoogleLogin';


const CreatUser = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, UpdeteError] = useUpdateProfile(auth);
    const [token] = useToken(user)

    const onSubmit = async data => {


        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        // 


    }
    useEffect(() => {
        if (token) {

            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    let ErrorsMessege;
    if (error || UpdeteError) {
        ErrorsMessege = <p className='text-red-500'>{error?.message || UpdeteError?.message}</p>
    }

    if (loading) {
        return <Loding></Loding>
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class=" text-center text-accent font-bold text-6xl">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input type="text" placeholder="name" class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is requard'
                                    }
                                })}
                            />
                            <label class="label">

                                {errors.name?.type === 'required' && <p >{errors.name.message}</p>}

                            </label>

                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is requard'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Enter Valid Email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label class="label">

                                {errors.email?.type === 'required' && <p >{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p >{errors.email.message}</p>}
                            </label>

                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="Password" placeholder="password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is requard'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label class="label">

                                {errors.password?.type === 'required' && <p >{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p >{errors.password.message}</p>}
                            </label>

                        </div>

                        {ErrorsMessege}

                        <input class="btn w-full max-w-xs" type="submit" value='Sign Up' />
                    </form>
                    <p><small>Already Have An Account</small> <Link className='text-primary' to='/login'>Login</Link></p>
                    <div class="divider">OR</div>
                    <div className='flex justify-center items-center'>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreatUser;