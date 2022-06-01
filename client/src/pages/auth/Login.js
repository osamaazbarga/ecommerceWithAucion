import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from 'react-router-dom';
import { auth, googleAuthProvider } from "../../firbase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrUpdateUser } from "../../function/auth";

const Login = ( ) => {
    const [email, setEmail] = useState('o.s.2@hotmail.com')
    const [password, setPassword] = useState('315454199')
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();
    const { state } = useLocation();
    const from = state?.from || "/";
    const { user } = useSelector((state) => ({ ...state }))
    useEffect(() => {
        let intended=from
        console.log(intended);
        console.log(user);
        // if(user){
        //     return
        // }
        // else{
        //     //console.log("login");
        //     if (user && user.token) {

        //         navigate(from.pathname)
        //     }
        // }
        if (user && user.token) {

                    navigate(from.pathname||from)
        }
                
        
    }, [user,from])
    // useEffect(() => {
    //     // let intended=history.location.state
    //     // if(intended){
    //     //     return;
    //     // }
    //     // else{
    //     //     //console.log("login");
    //     //     if (user && user.token) {

    //     //         history.push('/')
    //     //     }
    //     // }
    //     console.log(from);
        
    // }, [user])


    let dispatch = useDispatch()

    const roleBasedRedirect=(res)=>{

        // let intended=history.location.state
        let intended=state

        if(intended){
            navigate(intended.pathname||from)
        }
        else{
            if(res.data.role==='admin'){
                navigate("/admin/dashboard")
            }
            else{
                navigate("/user/history")
            }
        }
        
    }


    const handleSubmit = async (e) => {
        console.log(e);
        e.preventDefault();
        setLoading(true)
        console.log(email, password);
        try {
            const result = await auth.signInWithEmailAndPassword(email, password)
            // console.log(result);
            const { user } = result
            const idTokenResult = await user.getIdTokenResult()

            await createOrUpdateUser(idTokenResult.token)
                .then((res) => {
                    dispatch({
                        type: "LOGGED_IN_USER",
                        payload: {
                            name: res.data.name,
                            email: res.data.email,
                            token: idTokenResult.token,
                            role: res.data.role,
                            _id: res.data._id,
                        },
                    });
                    roleBasedRedirect(res)
                })
                .catch(err=>console.log(err));



            // history.push('/')
            
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
                    icon={<MailOutlined />}
                    size="large"
                    disabled={!email || password.length < 8}
                >Login with Email
                </Button>
            </form>
        )
    }

    const googleLogin = async () => {
        auth.signInWithPopup(googleAuthProvider).then(async (result) => {
            const { user } = result
            const idTokenResult = await user.getIdTokenResult()
            await createOrUpdateUser(idTokenResult.token)
                .then((res) => {
                    dispatch({
                        type: "LOGGED_IN_USER",
                        payload: {
                            name: res.data.name,
                            email: res.data.email,
                            token: idTokenResult.token,
                            role: res.data.role,
                            _id: res.data._id,
                        },
                    });
                    roleBasedRedirect(res)
                })
                .catch(err=>console.log(err));
            // history.push('/')
        }).catch(err => {
            console.log(err)
            toast.error(err.message)
        });
    }
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {loading ? <h4>Login</h4> : <h4 className="text-danger">Loading...</h4>}
                    {/* <ToastContainer/> */}
                    {loginForm()}
                    <Button
                        type="danger"
                        onClick={googleLogin}
                        className="mb-3"
                        block
                        shape="round"
                        icon={<GoogleOutlined />}
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
