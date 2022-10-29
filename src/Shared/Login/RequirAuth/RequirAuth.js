import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loding from '../../Loding/Loding';

const RequirAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if(loading){
        return <Loding></Loding>
    }


    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequirAuth;