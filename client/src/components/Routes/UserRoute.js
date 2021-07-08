import React from 'react'
import {Route} from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'

export const UserRoute = ({children,...rest}) => {
    const {user}=useSelector((state)=>({...state}))
    
    return user&&user.token?(<Route {...rest}/>):(<div className="text-danger"><LoadingToRedirect/></div>)
}
