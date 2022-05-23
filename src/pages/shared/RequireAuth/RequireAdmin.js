import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.config';
import useAdmin from '../../../hooks/useAdmin';
import NotFound from '../../NotFound/NotFound';
import Loading from '../Loading/Loading';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, isLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    if (!admin) {
        return <Navigate to='/page-not-found' replace></Navigate>
        // return <NotFound />
    }

    return children;
};

export default RequireAdmin;