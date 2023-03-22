import React from 'react'
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../hook/useAuth';

function RequireAuth(props) {
    const location = useLocation()
    const { user } = useAuth()

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} />
    }
    return (
        <div>{props.children}</div>
    )
}

export default RequireAuth