import React, { useState } from 'react'
import { auth } from '../../firbase'
import { toast } from 'react-toastify'
import { Button } from 'antd'
import { MailOutlined } from '@ant-design/icons';



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        console.log(e);
        e.preventDefault();
        console.log(email,password);

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
                     >Login with Email</Button>
            </form>
        )
    }
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Login</h4>
                    {/* <ToastContainer/> */}
                    {loginForm()}
                </div>
            </div>
        </div>
    )
}

export default Login
