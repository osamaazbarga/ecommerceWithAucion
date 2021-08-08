import React,{useEffect} from 'react';
import {Switch,Route}from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './components/nav/Header';
import RegisterComplete from './pages/auth/RegisterComplete';
import AdminDashboard from './pages/admin/AdminDashboard';
import {auth} from './firbase'
import {useDispatch} from 'react-redux'
import { ForgetPassword } from './pages/auth/ForgetPassword';
import {currentUser} from './function/auth'
import { History } from './pages/user/History';
import { UserRoute } from './components/Routes/UserRoute';
import { AdminRoute } from './components/Routes/AdminRoute';
import { Password } from './pages/user/Password';
import { Wishlist } from './pages/user/Wishlist';
import CategoryCreate from './pages/admin/category/CategoryCreate';
import CategoryUpdate from './pages/admin/category/CategoryUpdate';
import SubCreate from './pages/admin/subCategory/SubCreate';
import SubUpdate from './pages/admin/subCategory/SubUpdate';
import ProductCreate from './pages/product/ProductCreate';
import AllProducts from './pages/product/AllProducts';
import ProductUpdate from './pages/product/ProductUpdate';
import ProductView from './pages/ProductView';
import CategoryHome from './pages/category/CategoryHome';
import SubHome from './pages/sub/SubHome';
import Shop from './pages/Shop';



function App() {
  const dispatch=useDispatch()
  //to check firebase auth state
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(async(user)=>{
      if(user){
        const idTokenResult=await user.getIdTokenResult()
        console.log(user);
        await currentUser(idTokenResult.token)
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
                })
                .catch(err=>console.log(err));
      }

    })
    //cleanup
    return ()=>unsubscribe()
  },[dispatch])
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
        <UserRoute exact path="/user/history" component={History}/>
        <UserRoute exact path="/user/password" component={Password}/>
        <UserRoute exact path="/user/wishlist" component={Wishlist}/>
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
        <AdminRoute exact path="/admin/category" component={CategoryCreate}/>
        <AdminRoute exact path="/admin/category/:slug" component={CategoryUpdate}/>
        <AdminRoute exact path="/admin/sub" component={SubCreate}/>
        <AdminRoute exact path="/admin/sub/:slug" component={SubUpdate}/>
        <AdminRoute exact path="/admin/product" component={ProductCreate}/>
        <AdminRoute exact path="/admin/products" component={AllProducts}/>
        <AdminRoute exact path="/admin/product/:slug" component={ProductUpdate}/>


        <Route exact path="/product/:slug" component={ProductView}/>
        <Route exact path="/category/:slug" component={CategoryHome}/>
        <Route exact path="/sub/:slug" component={SubHome}/>
        <Route exact path="/shop" component={Shop}/>









 
        




      </Switch>
    </div>
    
  );
}

export default App;
