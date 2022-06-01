import React from 'react'
// import { Route } from 'react-router';
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

import { Navigate, Outlet } from 'react-router-dom';

const UserRoute = ({children,...rest}) => {
    const {user}=useSelector((state)=>({...state}))
    
    // return user&&user.token?(<Route {...rest}/>):(<div className="text-danger"><LoadingToRedirect/></div>)
    return user&&user.token?(<Outlet {...rest}/>):(<div className="text-danger"><LoadingToRedirect/></div>)
}

export default UserRoute;
