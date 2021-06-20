import React,{useEffect} from 'react';
import {Switch,Route}from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './components/nav/Header';
import RegisterComplete from './pages/auth/RegisterComplete';
import {auth} from './firbase'
import {useDispatch} from 'react-redux'
import { ForgetPassword } from './pages/auth/ForgetPassword';



function App() {
  const dispatch=useDispatch()
  //to check firebase auth state
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(async(user)=>{
      if(user){
        const idTokenResult=await user.getIdTokenResult()
        console.log(user);
        dispatch({
          type:'LOGGED_IN_USER',
          payload:{
            email:user.email,
            token:idTokenResult.token,
          }
        })
      }

    })
    //cleanup
    return ()=>unsubscribe()
  },[])
  return (
    <div>
      <Header/>
      <ToastContainer/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/register/complete" component={RegisterComplete}/>
        <Route exact path="/forget/password" component={ForgetPassword}/>


      </Switch>
    </div>
    
  );
}

export default App;
