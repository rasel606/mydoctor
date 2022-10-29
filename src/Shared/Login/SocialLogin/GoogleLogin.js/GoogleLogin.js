import React, { useEffect } from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import Loding from '../../../Loding/Loding';

const GoogleLogin = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [token] = useToken(user)

    useEffect(() => {
        if (token) {

            navigate(from, { replace: true });
        }
    },[token,from,navigate])
    let ErrorsMessege;
    if (error) {
        ErrorsMessege = <p className='text-red-500'>{error?.message}</p>
    }

    if (loading) {
        return <Loding></Loding>
    }


    return (
        <div>
            <p>{ErrorsMessege}</p>
            <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue With Google</button>
        </div>
    );
};

export default GoogleLogin;