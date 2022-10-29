import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseAdmin from '../../Hooks/UseAdmin';
import Loding from '../../Loding/Loding';

const RequirAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    const [admin,adminLoading] =UseAdmin(user)

    if(loading || adminLoading){
        return <Loding></Loding>
    }


    if (!user || !admin) {
        signOut(auth)
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};



export default RequirAdmin;