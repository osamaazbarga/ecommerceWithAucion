import React, { useState,useEffect } from 'react'
import { auth,googleAuthProvider } from '../../firbase'
import { toast } from 'react-toastify'
import { Button } from 'antd'
import { MailOutlined,GoogleOutlined } from '@ant-design/icons';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Login = ({history}) => {
    const [email, setEmail] = useState('o.s.2@hotmail.com')
    const [password, setPassword] = useState('315454199')
    const [loading, setLoading] = useState(false)

    const {user}=useSelector((state)=>({...state}))
    useEffect(()=>{
        if(user && user.token){
            history.push('/')
        }
    },[user])


    let dispatch=useDispatch()


    const handleSubmit = async (e) => {
        console.log(e);
        e.preventDefault();
        setLoading(true)
        console.log(email,password);
        try {
            const result=await auth.signInWithEmailAndPassword(email,password)
            // console.log(result);
            const {user}=result
            const idTokenResult=await user.getIdTokenResult()
            dispatch({
                type:'LOGGED_IN_USER',
                payload:{
                  name:user.email,
                  token:idTokenResult.token,
                }
            })

            history.push('/')
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            setLoading(false)
        }
    }

    const loginForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                        placeholder="Enter Your Email"
                        autoFocus
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => { setPassword(e.target.value) }}
                        placeholder="Enter Your Password"
                    />
                </div>



                <br />
                <Button 
                    type="primary" 
                    onClick={handleSubmit} 
                    className="mb-3" 
                    block
                    shape="round"
                    icon={<MailOutlined/>}
                    size="large"
                    disabled={!email||password.length<8}
                     >Login with Email
                </Button>
            </form>
        )
    }

    const googleLogin=async()=>{
        auth.signInWithPopup(googleAuthProvider).then(async(result)=>{
            const {user}=result
            const idTokenResult=await user.getIdTokenResult()
            dispatch({
                type:'LOGGED_IN_USER',
                payload:{
                  name:user.email,
                  token:idTokenResult.token,
                }
            })
            history.push('/')
        }).catch(err=>{
            console.log(err)
            toast.error(err.message)
        });
    }
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {loading?<h4>Login</h4>:<h4 className="text-danger">Loading...</h4>}
                    {/* <ToastContainer/> */}
                    {loginForm()}
                    <Button 
                        type="danger" 
                        onClick={googleLogin} 
                        className="mb-3" 
                        block
                        shape="round"
                        icon={<GoogleOutlined/>}
                        size="large"
                        >Login with Google
                    </Button>
                    <Link to="/forget/password" className="float-right text-danger">Forget Password?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
