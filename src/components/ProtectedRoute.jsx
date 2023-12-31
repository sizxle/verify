import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


//wraps public route to private
function ProtectedRoute() {
    const {currentUser}=useAuth();
    return  currentUser ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute