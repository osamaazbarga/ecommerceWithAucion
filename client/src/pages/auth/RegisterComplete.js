import React,{useState,useEffect} from 'react'
import {auth} from '../../firbase'
import { toast} from 'react-toastify'



const RegisterComplete = ({history}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const [email,setEmail]=useState('')

    useEffect(()=>{
        setEmail(window.localStorage.getItem("emailForRegistration"))
    },[])

    //props history
    // history.push('/')
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!email||!password){
            toast.error('Email and password is required')
            return;
        }
        if(password.length<8){
            toast.error("password must be at least 6 characters long")
            return;
        }
        try{
            const result =await auth.signInWithEmailLink(email,window.location.href)
            if(result.user.emailVerified){
                //remove user from localstorage
                window.localStorage.removeItem('emailForRegistration')
                //get user id token
                let user =auth.currentUser
                await user.updatePassword(password)
                const idTokenResulr=await user.getIdTokenResult()
                //redux store
                console.log('user',user,'idtokenresult',idTokenResulr);
                //redirect
                history.push('/')
            }
        }
        catch(error){
            toast.error(error.message)
        }
        
    }
    const completeRegistertionForm=()=>{
        return(
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    className="form-control" 
                    value={email} 
                    disabled
                />

                <input 
                    type="password" 
                    className="form-control" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder="password"
                    autoFocus
                />
                <button type="submit" className="btn btn-raised">complete register</button>
            </form>
        )
    }
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register complete</h4>
                    {/* <ToastContainer/> */}
                    {completeRegistertionForm()}
                </div>
            </div>
        </div>
    )
}

export default RegisterComplete
